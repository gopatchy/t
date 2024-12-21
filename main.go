package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"strings"

	_ "github.com/lib/pq"
)

type Tasks struct {
	tmpl *template.Template
	mux  *http.ServeMux
	db   *sql.DB
}

func NewTasks(db *sql.DB) (*Tasks, error) {
	funcMap := template.FuncMap{
		"lower": strings.ToLower,
		"join":  strings.Join,
	}

	tmpl, err := template.New("index.html").Funcs(funcMap).ParseFiles("static/index.html")
	if err != nil {
		return nil, fmt.Errorf("static/index.html: %w", err)
	}

	t := &Tasks{
		tmpl: tmpl,
		mux:  http.NewServeMux(),
		db:   db,
	}

	t.mux.HandleFunc("GET /{$}", t.serveRoot)
	t.mux.Handle("GET /", http.FileServer(http.Dir("static")))

	return t, nil
}

func (t *Tasks) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	t.mux.ServeHTTP(w, r)
}

func (t *Tasks) serveRoot(w http.ResponseWriter, r *http.Request) {
	err := t.initRequest(w, r)
	if err != nil {
		sendError(w, http.StatusBadRequest, "init request: %s", err)
		return
	}

	err = t.tmpl.Execute(w, map[string]any{})
	if err != nil {
		sendError(w, http.StatusInternalServerError, "error executing template: %s", err)
		return
	}
}

func (t *Tasks) initRequest(w http.ResponseWriter, r *http.Request) error {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, QUERY, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "*")

	defer r.Body.Close()

	err := r.ParseForm()
	if err != nil {
		return err
	}

	if r.Header.Get("Content-Type") == "application/json" {
		dec := json.NewDecoder(r.Body)
		js := map[string]any{}
		err := dec.Decode(&js)
		if err != nil {
			return err
		}

		for k, v := range js {
			switch v := v.(type) {
			case []any:
				for _, s := range v {
					r.Form.Add(k, fmt.Sprintf("%v", s))
				}

			default:
				r.Form.Set(k, fmt.Sprintf("%v", v))
			}
		}
	}

	log.Printf("%s %s %s %s %s", r.RemoteAddr, r.Method, r.Host, r.URL, r.Form)

	return nil
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatalf("please set PORT")
	}

	pgConn := os.Getenv("PGCONN")
	if pgConn == "" {
		log.Fatalf("please set PGCONN")
	}

	db, err := sql.Open("postgres", pgConn)
	if err != nil {
		log.Fatal(err)
	}

	/*
			stmts := []string{
				`
		    CREATE TABLE IF NOT EXISTS links (
		        short VARCHAR(100) NOT NULL,
		        long TEXT NOT NULL,
				domain VARCHAR(255) NOT NULL,
				generated BOOLEAN NOT NULL,
				PRIMARY KEY (short, domain)
		    );
			`,

				`
			CREATE TABLE IF NOT EXISTS links_history (
				short VARCHAR(100),
				long TEXT NOT NULL,
				domain VARCHAR(255) NOT NULL,
				generated BOOLEAN NOT NULL,
				until TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
			);
			`,

				`
			CREATE OR REPLACE FUNCTION update_link(
				_short VARCHAR(100),
				_long TEXT,
				_domain VARCHAR(255),
				_generated BOOLEAN
			) RETURNS void AS $$
			DECLARE
				old RECORD;
			BEGIN
				SELECT * INTO old FROM links WHERE short = _short AND domain = _domain;

				IF old IS NOT NULL THEN
					INSERT INTO links_history (short, long, domain, generated)
					VALUES (old.short, old.long, old.domain, old.generated);

					UPDATE links
					SET long = _long, generated = _generated
					WHERE short = _short AND domain = _domain;
				ELSE
					INSERT INTO links (short, long, domain, generated)
					VALUES (_short, _long, _domain, _generated);
				END IF;
			END;
			$$ LANGUAGE plpgsql;
			`,
			}

			for _, stmt := range stmts {
				_, err := db.Exec(stmt)
				if err != nil {
					log.Fatalf("Failed to create tables & functions: %v", err)
				}
			}
	*/

	t, err := NewTasks(db)
	if err != nil {
		log.Fatalf("failed to create tasks: %v", err)
	}

	http.Handle("/", t)

	bind := fmt.Sprintf(":%s", port)
	log.Printf("listening on %s", bind)

	if err := http.ListenAndServe(bind, nil); err != nil {
		log.Fatalf("listen: %s", err)
	}
}

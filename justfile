default: build

compile:
    tsc

bundle:
    esbuild js/main.js --bundle --format=esm --outfile=static/app.js

build: compile bundle
default: build

compile:
    tsc

bundle:
    esbuild js/main.js --bundle --format=esm --platform=browser --target=esnext --sourcemap=inline --outfile=static/app.mjs

build: compile bundle
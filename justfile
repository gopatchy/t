default: build

compile flags='':
    tsc {{flags}}

bundle flags='':
    esbuild js/main.js --bundle --format=esm --platform=browser --target=esnext --sourcemap=inline --outfile=static/app.mjs {{flags}}

build:
    just compile
    just bundle

watch:
    concurrently "just compile --watch" "just bundle --watch"
all: style script build

style:
	npx tailwindcss -o dist/style.css

script:
	deno bundle --no-check src/script.tsx dist/script.js
	npx esbuild --minify dist/script.js --outfile=dist/script.min.js

build:
	deno run -A src/build.ts
# stickorz-gm

GreaseMonkey userscript for Stickorz

Modern React+TailwindCSS userscript built with Deno and ESBuild

## Building

Building requires deno and node

Just run `make` to build everything

Or use these commands to build some part:

- `make style`: generate styles with tailwindcss
- `make script`: bundle the script with deno and minify it with esbuild
- `make build`: put the style and the minified script in the template userscript

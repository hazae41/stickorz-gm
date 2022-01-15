const style = Deno
  .readTextFileSync("dist/style.css")
const script = Deno
  .readTextFileSync("dist/script.min.js")

const build = Deno
  .readTextFileSync("template.js")
  .replaceAll(`TEMPLATE_STYLE`, style)

Deno.writeTextFileSync("dist/stickorz.user.js", build)
Deno.writeTextFileSync("dist/stickorz.user.js", script, { append: true })

Deno.removeSync("dist/style.css")
Deno.removeSync("dist/script.js")
Deno.removeSync("dist/script.min.js")
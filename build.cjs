const esbuild = require("esbuild");
const esbuildPluginTsc = require("esbuild-plugin-tsc");

esbuild.build({
  entryPoints: ["./src/main.ts"],
  bundle: true,
  platform: "node",
  outfile: "dist/main.js",
  plugins: [esbuildPluginTsc()],
});

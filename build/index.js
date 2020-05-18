const globby = require("globby");
const rollup = require("rollup");
const buble = require("@rollup/plugin-buble");
const resolve = require("@rollup/plugin-node-resolve");
const fs = require("fs-extra");

fs.copy("src/", "dist/", (err) => {
  if (!err) {
    console.log("copy files from src/ to dist/");
  }
});

const rollupConfig = globby.sync(["src/**/*.js"]).map((inputFile) => {
  const fileName = inputFile.replace("src/", "");
  return {
    input: inputFile,
    output: {
      file: `dist/dist/${fileName}`,
      name: `${
        fileName.split("/")[0].indexOf(".js") > -1 ? "" : fileName.split("/")[0]
      }Utils`,
      exports: "named",
      format: "umd",
      sourcemap: true,
    },
    plugins: [resolve(), buble()],
  };
});

// console.log(rollupConfig);

rollupConfig.forEach((option, i) => {
  rollup.rollup(option).then((bundle) => {
    bundle.write(option.output);
  });
});

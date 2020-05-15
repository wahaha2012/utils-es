const globby = require("globby");
const rollup = require("rollup");
const rollupConfig = globby
  .sync(["**/*.js", "!node_modules", "!build", "!dist"])
  .map((inputFile) => ({
    input: inputFile,
    output: {
      file: `dist/${inputFile}`,
      name: `${
        inputFile.split("/")[0].indexOf(".js") > -1
          ? ""
          : inputFile.split("/")[0]
      }Utils`,
      exports: "named",
      format: "umd",
      sourcemap: true,
    },
  }));

// console.log(rollupConfig);

rollupConfig.forEach((option, i) => {
  rollup.rollup(option).then((bundle) => {
    bundle.write(option.output);
  });
});

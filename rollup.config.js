const { base64 } = require("rollup-plugin-base64");

export default {
    input: 'lib/index.js',
    moduleName: 'AwayjsAssembly',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    plugins: [
      base64({ include: "**/*.wasm" }),
    ],
  };
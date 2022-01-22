const { base64 } = require("rollup-plugin-base64");

export default {
    input: 'lib/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs'
    },
    plugins: [
      base64({ include: "**/*.wasm" }),
    ],
  };
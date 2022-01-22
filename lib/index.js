import { instantiateSync } from "@assemblyscript/loader";
import b64wasm from "../build/untouched.wasm";
const blob = atob(b64wasm);
const buff = new Uint8Array(blob.length);
for (let i = 0; i < blob.length; i++)
  buff[i] = blob.charCodeAt(i);

const loader = instantiateSync(buff);
console.log(loader.exports);
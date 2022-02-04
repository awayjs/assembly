import { instantiate } from "@assemblyscript/loader";
import b64wasm from "../build/untouched.wasm";

// convert the base64 to a buffer
const blob = atob(b64wasm);
const buff = new Uint8Array(blob.length);
for (let i = 0; i < blob.length; i++)
  buff[i] = blob.charCodeAt(i);

export default instantiate(buff);
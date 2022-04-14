import * as esbuild from "esbuild-wasm";

import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";

let service: esbuild.Service;

export const bundle = async (code: string) => {
  if (!service) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  }

  const output = service.build({
    entryPoints: ["index.js"],
    bundle: true,
    write: false,
    plugins: [unpkgPathPlugin(), fetchPlugin(code)],
    define: {
      "process.env.NODE_ENV": '"production"',
      global: "window",
    },
  });

  return (await output).outputFiles[0].text;
};
/** Ambient declarations for @jitsi/rnnoise-wasm — the package ships untyped.
 *  The wasm module contract (HEAPF32, _rnnoise_*, _malloc/_free) is described
 *  in src/editor/denoise.ts. */

declare module '@jitsi/rnnoise-wasm' {
  export interface RNNWasmOverrides {
    wasmBinary?: ArrayBuffer;
    locateFile?: (path: string, prefix: string) => string;
  }
  export function createRNNWasmModule(
    overrides?: RNNWasmOverrides,
  ): Promise<import('./denoise').DenoiseWasmModule>;
  export function createRNNWasmModuleSync(
    overrides?: RNNWasmOverrides,
  ): Promise<import('./denoise').DenoiseWasmModule>;
}

declare module '@jitsi/rnnoise-wasm/dist/rnnoise.wasm?url' {
  const src: string;
  export default src;
}

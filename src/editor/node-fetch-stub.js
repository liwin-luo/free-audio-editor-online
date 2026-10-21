// TensorFlow's browser build still require()s node-fetch. A tab never calls it
// (window.fetch is used), but the import has to load. The real package pulls
// whatwg-url, which Vite cannot turn into an ESM default export.
const fetchImpl = (...args) => globalThis.fetch(...args);
const { Headers, Request, Response } = globalThis;
export default fetchImpl;
export { fetchImpl as fetch, Headers, Request, Response };

// Browser stand-in for `@tensorflow/tfjs`. That package's module entry also
// loads the Node platform, which pulls node-fetch and crashes in a tab.
// Basic Pitch calls tensor.slice / tensor.reshape, which only exist after the
// chained-op side effects run.
import '@tensorflow/tfjs-core/dist/register_all_gradients';
import '@tensorflow/tfjs-core/dist/public/chained_ops/register_all_chained_ops';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
export * from '@tensorflow/tfjs-core';
export * from '@tensorflow/tfjs-converter';

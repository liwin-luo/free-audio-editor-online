import assert from 'node:assert/strict';
import { shouldLoadFeedback } from '../src/feedback-consent.mjs';

assert.equal(shouldLoadFeedback(null), false);
assert.equal(shouldLoadFeedback('rejected'), false);
assert.equal(shouldLoadFeedback(''), false);
assert.equal(shouldLoadFeedback('accepted'), true);
console.log('consent ok');

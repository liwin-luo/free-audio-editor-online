import assert from 'node:assert/strict';
import { shouldLoadClarity, shouldLoadFeedback } from '../src/feedback-consent.mjs';

assert.equal(shouldLoadFeedback(null), false);
assert.equal(shouldLoadFeedback('rejected'), false);
assert.equal(shouldLoadFeedback(''), false);
assert.equal(shouldLoadFeedback('accepted'), true);

assert.equal(shouldLoadClarity('accepted', 'freeaudioeditor.online'), true);
assert.equal(shouldLoadClarity('accepted', 'www.freeaudioeditor.online'), true);
assert.equal(shouldLoadClarity('accepted', 'localhost'), false);
assert.equal(shouldLoadClarity('accepted', 'notfreeaudioeditor.online'), false);
assert.equal(shouldLoadClarity('rejected', 'freeaudioeditor.online'), false);
assert.equal(shouldLoadClarity(null, 'freeaudioeditor.online'), false);
console.log('consent ok');

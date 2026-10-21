/** Only an explicit accept loads the feedback widget. */
export function shouldLoadFeedback(value) {
  return value === 'accepted';
}

/** Only an explicit accept loads the feedback widget and Clarity. */
export function shouldLoadFeedback(value) {
  return value === 'accepted';
}

/** Apex or a real subdomain. A lookalike suffix such as notfreeaudioeditor.online does not match. */
export function isProductionHost(hostname) {
  return hostname === 'freeaudioeditor.online' || hostname.endsWith('.freeaudioeditor.online');
}

export function shouldLoadClarity(consent, hostname) {
  return shouldLoadFeedback(consent) && isProductionHost(hostname);
}

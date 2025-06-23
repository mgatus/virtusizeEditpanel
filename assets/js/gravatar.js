import md5 from "https://cdn.skypack.dev/blueimp-md5";

/**
 * Returns the Gravatar image URL for a given email address.
 * Gravatar uses an MD5 hash of the user's email (lowercased and trimmed).
 * If the user does not have a Gravatar, an identicon is shown by default.
 *
 * @param {string} email - The user's email address.
 * @returns {string} - The Gravatar image URL.
 */
export function getGravatarUrl(email) {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
}

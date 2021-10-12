/**
 * xss filter
 * @param {String} source source content
 * @returns {String} html safe content
 */
export const xssFilter = (source) => {
  return typeof source === "string"
    ? source
        .replace(/<script.*?>/g, "&lt;script&gt;")
        .replace(/<\/.*?script>/g, "&lt;/script&gt;")
    : source;
};

export default {
  xssFilter,
};

/**
 * safe inner html
 * @param {String} source raw html content
 * @returns safe html
 */
export const htmlSafe = (source) => {
  return typeof source === "string"
    ? source
        .replace(/&/g, "&amp;")
        .replace(/>/g, "&gt;")
        .replace(/</g, "&lt;")
        .replace(/"/g, "&quot;")
        .replace("'", "&#39;")
    : String(source);
};

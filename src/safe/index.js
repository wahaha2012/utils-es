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

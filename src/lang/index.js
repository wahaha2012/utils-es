/**
 * check varible type
 * @param {Any} source
 * @param {String} type
 * @returns {String | Boolean}
 */
export const isType = (source, type) => {
  const originType = Object.prototype.toString.call(source).slice(8, -1);
  if (typeof type === "string") {
    return originType === type || originType.toLowerCase() === type;
  } else {
    return originType;
  }
};

export default {
  isType,
};

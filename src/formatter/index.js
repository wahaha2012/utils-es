/**
 * Thousands Separator Formatter
 * @param {Number | String} number
 * @return { String }
 */
export const thousandsSeparatorFormat = (number) => {
  const num = parseFloat(number);
  if (typeof Number.prototype.toLocaleString === "function") {
    return num.toLocaleString();
  }

  let result = num ? "" : String(num);
  let arr = [];

  if (num) {
    arr = String(Math.abs(num)).split(".");
    let str = arr[0];
    const len = str.length;
    for (let i = 1; i <= len; i += 1) {
      if (i % 3 == 0 && i !== len) {
        str = `${str.substring(0, len - i)},${str.substring(len - i, len)}`;
      }
    }
    arr[0] = str;
    result = arr.join(".");
  }
  return num < 0 ? `-${result}` : result;
};

export default {
  thousandsSeparatorFormat,
};

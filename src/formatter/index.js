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

  if (num) {
    const reverseString = (str) => str.split("").reverse().join("");
    const arr = String(Math.abs(num)).split(".");
    arr[0] = reverseString(arr[0]);
    arr[0] = arr[0].replace(/(\d{3})/g, "$1,").replace(/,$/, "");
    arr[0] = reverseString(arr[0]);
    result = arr.join(".");
  }
  return num < 0 ? `-${result}` : result;
};

export default {
  thousandsSeparatorFormat,
};

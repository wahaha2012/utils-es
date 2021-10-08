/**
 * debounce
 * @param {Function} func
 * @param {Integer} wait debounce wait time in milliseconds
 * @param {Boolean} immediate
 * @returns {Function} new Function
 */
export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    if (!immediate) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args);
      }, wait);
    } else {
      func.apply(context, args);
    }
  };
}

export default {
  debounce,
};

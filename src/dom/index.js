/**
 * create dom element
 * @param {String} tagName dom tag name
 * @param {Object} attrs dom attributes
 * @return { DomElement} dom element
 */
export const createElement = (tagName, attrs = {}) => {
  if (!tagName || !document) {
    return;
  }

  const el = document.createElement(tagName);
  Object.keys(attrs).forEach((attr) => {
    if (attr === "innerHTML" || attr === "innerText") {
      el[attr] = attrs[attr];
    } else {
      el.setAttribute(attr, attrs[attr]);
    }
  });

  return el;
};

/**
 * remove element
 * @param {DomElement} element
 */
export const removeElement = (element) => {
  element.parentElement.removeChild(element);
};

/**
 * add new class name
 * @param {DomElement} element
 * @param {String | Array} className
 * @returns {DomElement} element
 */
export const addClass = (element, className) => {
  let classNameList = [className];
  if (Object.prototype.toString.call(className) === "[object Array]") {
    classNameList = className;
  } else if (typeof className === "string") {
    if (className.indexOf(" ") > -1) {
      classNameList = className.split(" ");
    }
  } else {
    return element;
  }

  const oldClassNameList = element
    .getAttribute("class")
    .split(" ")
    .filter((v) => v);
  classNameList.forEach((item) => {
    if (oldClassNameList.indexOf(item) === -1) {
      oldClassNameList.push(item);
    }
  });

  element.setAttribute("class", oldClassNameList.join(" "));
  return element;
};

/**
 * remove class name from element
 * @param {DomElement} element
 * @param {String | Array} className
 * @returns {DomElement} element
 */
export const removeClass = (element, className) => {
  let classNameList = [className];
  if (Object.prototype.toString.call(className) === "[object Array]") {
    classNameList = className;
  } else if (typeof className === "string") {
    if (className.indexOf(" ") > -1) {
      classNameList = className.split(" ");
    }
  } else {
    return element;
  }

  const newClassNameList = element
    .getAttribute("class")
    .split(" ")
    .filter((v) => v && classNameList.indexOf(v) === -1);

  element.setAttribute("class", newClassNameList.join(" "));
  return element;
};

export default {
  createElement,
  removeElement,
  addClass,
  removeClass,
};

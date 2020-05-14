/**
 *获取queryString
 *@method getQueryString
 *@param queryString {String}
 *@param searchString {String}
 *@return {String}
 */
export const getQueryString = (queryString, searchString) => {
  const p = new RegExp(`${queryString}=([^&=?]*)`);
  let result = "";

  const searchStr = searchString || window.location.search;

  const matches = searchStr.match(p);

  if (matches !== null) {
    result = decodeURIComponent(matches[1]);
  }

  return result;
};

export default {
  getQueryString,
};

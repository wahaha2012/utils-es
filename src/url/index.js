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

/**
 * transform params object to query string
 * @param {Object} params
 * @return { String } query string
 */
export const paramsToQueryString = (params) => {
  const queryArr = [];
  Object.entries(params).forEach(([k, v]) => {
    if (typeof v === "undefined") {
      return;
    }
    queryArr.push(`${k}=${encodeURIComponent(v)}`);
  });

  return queryArr.join("&");
};

export default {
  getQueryString,
  paramsToQueryString,
};

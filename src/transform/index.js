/**
 * data2Set transform data to Set Object
 * @param {Any} data
 * @return {Set | Any} Set object or source data
 */
export const data2Set = (data) => {
  if (data instanceof Set) {
    return data;
  } else if (Array.isArray(data)) {
    return new Set(data);
  } else {
    return new Set().add(data);
  }
};

export default {
  data2Set,
};

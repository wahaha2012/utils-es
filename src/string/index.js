/**
 * @description changePosition, move a part from string to another position
 * @param {String | Number} source source content
 * @param {Integer} startPosition move start position
 * @param {Integer} length move length
 * @param {Integer} targetPosition target position to put
 */
export const changePosition = (
  source,
  startPosition = 0,
  length = 0,
  targetPosition
) => {
  if (
    ["string", "number"].indexOf(typeof source) === -1 ||
    typeof startPosition !== "number" ||
    typeof length !== "number" ||
    typeof targetPosition !== "number"
  ) {
    return source;
  }

  const str = String(source);
  const start = parseInt(startPosition);
  const len = parseInt(length);
  const target = parseFloat(targetPosition);
  return [
    str.slice(0, start),
    str.slice(start + len, target),
    str.slice(start, start + len),
    str.slice(target),
  ].join("");
};

export default {
  changePosition,
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x > 0) {
    x = x
      .toString()
      .split('')
      .reverse()
      .join('');
    if (+x > Math.pow(2, 31)) {
      return 0;
    }
    return +x;
  } else {
    x = x
      .toString()
      .split('')
      .reverse()
      .join('')
      .slice(0, -1);
    if (-x < -Math.pow(2, 31)) {
      return 0;
    } else {
      return -x;
    }
  }
};

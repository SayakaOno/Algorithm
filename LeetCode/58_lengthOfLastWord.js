/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.split(' ').filter(item => item !== '');
  if (!s.length) {
    return 0;
  }
  return s[s.length - 1].length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length;
  }
  s = s.slice('');
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let map = {};
    for (let n = i; n < s.length; n++) {
      if (!map[s[n]]) {
        if (n === s.length - 1) {
          max = Math.max(n - i + 1, max);
          return max;
        }
        map[s[n]] = true;
      } else {
        max = Math.max(n - i, max);
        break;
      }
    }
  }
  return max;
};

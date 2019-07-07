/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  s = s.split('');
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    switch (s[i]) {
      case 'I':
        sum += 1;
        break;
      case 'V':
        sum += 5;
        if (s[i - 1] === 'I') {
          sum -= 1;
          i--;
        }
        break;
      case 'X':
        sum += 10;
        if (s[i - 1] === 'I') {
          sum -= 1;
          i--;
        }
        break;
      case 'L':
        sum += 50;
        if (s[i - 1] === 'X') {
          sum -= 10;
          i--;
        }
        break;
      case 'C':
        sum += 100;
        if (s[i - 1] === 'X') {
          sum -= 10;
          i--;
        }
        break;
      case 'D':
        sum += 500;
        if (s[i - 1] === 'C') {
          sum -= 100;
          i--;
        }
        break;
      case 'M':
        sum += 1000;
        if (s[i - 1] === 'C') {
          sum -= 100;
          i--;
        }
        break;
    }
  }
  return sum;
};

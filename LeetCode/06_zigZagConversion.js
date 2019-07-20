/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let go = null;
  let index = 0;
  let array = [];
  for (let i = 0; i < s.length; i++) {
    if (index === 0) {
      go = true;
    } else if (index === numRows - 1) {
      go = false;
    }
    array[index] ? array[index].push(s[i]) : (array[index] = [s[i]]);
    if (go) {
      index++;
    } else {
      index--;
    }
  }
  let answer = '';
  array.forEach(item => {
    return (answer += item.join(''));
  });
  return answer;
};

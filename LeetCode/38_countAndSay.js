/**
 * @param {number} n
 * @return {string}
 */
let convert = n => {
  n = n.toString().split('');
  let newArray = [];
  let index = -1;
  while (n.length) {
    if (newArray[index] === n[0]) {
      newArray[index - 1]++;
      n.shift();
    } else {
      newArray[++index] = 1;
      newArray[++index] = n.shift();
    }
  }
  return newArray.join('');
};

var countAndSay = function(n) {
  if (n === 1) {
    return '1';
  }
  let said = '';
  for (let i = 1; i < n; i++) {
    if (said) {
      said = convert(said);
    } else {
      said = convert(i);
    }
  }
  return said;
};

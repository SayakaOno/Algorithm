/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = digits.length - 1;
  while (digits[index] === 9 && index >= 0) {
    digits[index] = 0;
    index--;
  }
  if (index === -1) {
    digits.unshift(1);
  } else {
    digits[index]++;
  }
  return digits;
};

/**
 * @param {number} n
 * @return {number}
 */
let map = {};
function factorial(num) {
  if (num === 1) {
    return 1;
  } else if (map[num]) {
    return map[num];
  } else {
    let answer = num * factorial(num - 1);
    map[num] = answer;
    return answer;
  }
}

var climbStairs = function(n) {
  let sum = 0;
  let twoStepsCount = 1;
  while (2 * twoStepsCount <= n) {
    if (2 * twoStepsCount === n) {
      sum +=
        factorial(twoStepsCount + n - 2 * twoStepsCount) /
        factorial(twoStepsCount);
    } else {
      sum +=
        factorial(twoStepsCount + n - 2 * twoStepsCount) /
        (factorial(twoStepsCount) * factorial(n - 2 * twoStepsCount));
    }
    twoStepsCount++;
  }
  return sum + 1;
};

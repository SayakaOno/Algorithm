/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) {
    return [[nums[0], nums[1], nums[2]]];
  }
  let answer = [];
  let minus = [];
  let plus = [];
  let map = {};
  let zeroCount = 0;
  nums.sort((a, b) => a - b);
  nums.forEach(num => {
    if (num > 0) {
      plus.push(num);
    } else if (num < 0) {
      minus.push(num);
    } else {
      zeroCount++;
    }
    if (!map[num]) {
      map[num] = true;
    }
  });
  for (let i = 0; i < minus.length - 1; i++) {
    if (minus[i] === minus[i + 1]) {
      while (minus[i] === minus[i + 2]) {
        i++;
      }
      if (map[-(minus[i] + minus[i])]) {
        answer.push([minus[i], minus[i], -(minus[i] + minus[i])]);
      }
      i++;
    }
    for (let j = i + 1; j < minus.length; j++) {
      while (minus[j] === minus[j + 1]) {
        j++;
      }
      if (map[-(minus[i] + minus[j])]) {
        answer.push([minus[i], minus[j], -(minus[i] + minus[j])]);
      }
    }
  }
  for (let i = 0; i < plus.length - 1; i++) {
    if (plus[i] === plus[i + 1]) {
      while (plus[i] === plus[i + 2]) {
        i++;
      }
      if (map[-(plus[i] + plus[i])]) {
        answer.push([-(plus[i] + plus[i]), plus[i], plus[i]]);
      }
      i++;
    }
    for (let j = i + 1; j < plus.length; j++) {
      while (plus[j] === plus[j + 1]) {
        j++;
      }
      if (map[-(plus[i] + plus[j])]) {
        answer.push([-(plus[i] + plus[j]), plus[i], plus[j]]);
      }
    }
  }
  if (zeroCount) {
    for (let key in map) {
      if (key > 0 && map[-key]) {
        answer.push([-key, 0, +key]);
      }
    }
  }
  if (zeroCount >= 3) {
    answer.push([0, 0, 0]);
  }
  return answer;
};

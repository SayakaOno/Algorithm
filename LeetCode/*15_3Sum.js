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
  goThroughArray(minus, map, answer);
  goThroughArray(plus, map, answer);
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

function goThroughArray(array, map, answer) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      while (array[i] === array[i + 2]) {
        i++;
      }
      if (map[-(array[i] + array[i])]) {
        answer.push([array[i], array[i], -(array[i] + array[i])]);
      }
      i++;
    }
    for (let j = i + 1; j < array.length; j++) {
      while (array[j] === array[j + 1]) {
        j++;
      }
      if (map[-(array[i] + array[j])]) {
        answer.push([array[i], array[j], -(array[i] + array[j])]);
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let map = {};
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
      nums.push(nums[i]);
    }
  }
  nums.splice(0, length);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 0(n)
  let max = nums[0];
  let sum = max;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > sum + nums[i]) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    max = Math.max(max, sum);
  }
  return max;

  // O(n^2)
  // let max = Number.MIN_SAFE_INTEGER;
  // while (nums.length > 0) {
  //   let sum = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     sum += nums[i];
  //     max = Math.max(max, sum);
  //   }
  //   nums.shift();
  // }
  // return max;
};

function getSecondLargest(nums) {
  let newNums = new Set(nums);
  newNums = Array.from(newNums);
  newNums.sort((a, b) => b - a);
  return newNums[1];
}

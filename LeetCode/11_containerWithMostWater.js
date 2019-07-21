/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  while (leftIndex !== rightIndex) {
    max = Math.max(
      max,
      (rightIndex - leftIndex) * Math.min(height[rightIndex], height[leftIndex])
    );
    if (height[leftIndex] > height[rightIndex]) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  return max;
};

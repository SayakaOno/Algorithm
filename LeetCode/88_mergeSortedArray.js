/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // JavaScript method
  nums1.length = m;
  nums1.push(...nums2);
  return nums1.sort((a, b) => a - b);

  // let counter = 0;
  // nums1.length = m;
  // while (nums2.length) {
  //   if (counter === nums1.length) {
  //     nums1.splice(counter, 0, ...nums2);
  //     break;
  //   }
  //   if (nums1[counter] < nums2[0]) {
  //     counter++;
  //   } else {
  //     while (nums1[counter] >= nums2[0]) {
  //       nums1.splice(counter, 0, nums2.shift());
  //       counter++;
  //     }
  //   }
  // }
  // return nums1;
};

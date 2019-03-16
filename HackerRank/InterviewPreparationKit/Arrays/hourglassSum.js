function hourglassSum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      let total =
        arr[j][i] +
        arr[j][i + 1] +
        arr[j][i + 2] +
        arr[j + 1][i + 1] +
        arr[j + 2][i] +
        arr[j + 2][i + 1] +
        arr[j + 2][i + 2];
      max = Math.max(max, total);
    }
  }
  return max;
}

function minimumAbsoluteDifference(arr) {
  let a = arr.sort(function(a, b) {
    return b - a;
  });
  let minDiff;
  for (let i = 0; i < a.length - 1; i++) {
    let diff = Math.abs(a[i] - a[i + 1]);
    if (minDiff === undefined) {
      minDiff = diff;
    } else {
      minDiff = Math.min(minDiff, diff);
    }
  }
  return minDiff;
}

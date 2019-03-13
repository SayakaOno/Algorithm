function countingValleys(n, s) {
  let valley = 0;
  let level = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'U') {
      level++;
      if (level === 0) {
        valley++;
      }
    } else {
      level--;
    }
  }
  return valley;
}

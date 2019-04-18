function maxMin(k, arr) {
  let newArray = arr.sort((a, b) => b - a);
  let add = k - 1;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i + add < newArray.length; i++) {
    min = Math.min(min, newArray[i] - newArray[i + add]);
  }
  return min;
}

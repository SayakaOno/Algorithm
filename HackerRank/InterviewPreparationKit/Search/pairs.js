function pairs(k, arr) {
  let newArray = arr
    .slice()
    .sort((a, b) => a - b)
    .reverse();
  let answer = 0;
  let map = {};
  for (let i = 0; i < newArray.length; i++) {
    if (map[newArray[i]]) {
      answer++;
    }
    map[newArray[i] - k] = true;
  }
  return answer;
}

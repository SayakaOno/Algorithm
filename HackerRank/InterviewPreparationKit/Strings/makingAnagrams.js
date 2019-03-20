function makeAnagram(a, b) {
  let map = {};
  for (let i = 0; i < a.length; i++) {
    if (!map[a[i]]) {
      map[a[i]] = 1;
    } else {
      map[a[i]] += 1;
    }
  }
  let answer = 0;
  for (let i = 0; i < b.length; i++) {
    if (map[b[i]] && map[b[i]] > 0) {
      map[b[i]]--;
    } else {
      answer++;
    }
  }
  for (let key in map) {
    if (map[key] > 0) {
      answer += map[key];
    }
  }
  return answer;
}

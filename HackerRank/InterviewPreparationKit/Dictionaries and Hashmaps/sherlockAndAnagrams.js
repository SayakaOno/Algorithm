function sherlockAndAnagrams(s) {
  let map = {};
  let j = 0;
  while (j < s.length) {
    for (let i = j + 1; i < s.length + 1; i++) {
      let subString = s.substr(j, i - j);
      if (i - j > 0) {
        subString = subString
          .split('')
          .sort()
          .join('');
      }
      if (map[subString] || map[subString] >= 0) {
        map[subString]++;
      } else {
        map[subString] = 0;
      }
    }
    j++;
  }
  let counter = 0;
  for (let string in map) {
    if (map[string] > 1) {
      for (let i = 1; i <= map[string]; i++) {
        counter += i;
      }
    } else {
      counter += map[string];
    }
  }
  return counter;
}

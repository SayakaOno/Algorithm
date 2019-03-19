function twoStrings(s1, s2) {
  let map = {};
  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = true;
  }
  for (let i = 0; i < s2.length; i++) {
    if (map[s2[i]]) {
      return 'YES';
    }
  }
  return 'NO';
}

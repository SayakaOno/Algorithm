function alternatingCharacters(s) {
  let char = '';
  let deletion = 0;
  for (let i = 0; i < s.length; i++) {
    if (char === s[i]) {
      deletion++;
    } else {
      char = s[i];
    }
  }
  return deletion;
}

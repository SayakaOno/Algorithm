function vowelsAndConsonants(s) {
  let string = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (
      string[0] === 'a' ||
      string[0] === 'i' ||
      string[0] === 'u' ||
      string[0] === 'e' ||
      string[0] === 'o'
    ) {
      console.log(string.shift());
    } else {
      string.push(string.shift());
    }
  }
  while (string.length) {
    console.log(string.shift());
  }
}

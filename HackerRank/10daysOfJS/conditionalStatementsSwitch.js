function getLetter(s) {
  let letter;
  switch (true) {
    case ['a', 'e', 'i', 'o', 'u'].includes(s[0]):
      letter = 'A';
      break;
    case ['b', 'c', 'd', 'f', 'g'].includes(s[0]):
      letter = 'B';
      break;
    case ['h', 'j', 'k', 'l', 'm'].includes(s[0]):
      letter = 'C';
      break;
    default:
      letter = 'D';
      break;
  }
  return letter;
}

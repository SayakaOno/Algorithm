var isValid = function(s) {
  if (!s) {
    return true;
  }
  s = s.split('');
  let array = [];
  while (s.length) {
    if (
      !array.length &&
      (s.slice(0, 1) === ')' || s.slice(0, 1) === ']' || s.slice(0, 1) === '}')
    ) {
      return false;
    }
    if (!array.length) {
      array.push(s.shift());
    } else if (
      (s[0] === ')' && array[array.length - 1] === '(') ||
      (s[0] === ']' && array[array.length - 1] === '[') ||
      (s[0] === '}' && array[array.length - 1] === '{')
    ) {
      s.shift();
      array.length = array.length - 1;
      if (!s.length) {
        if (!array.length) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      array.push(s.shift());
    }
  }
  return false;
};

function isBalanced(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (
        (s[i] === ')' && stack[stack.length - 1] === '(') ||
        (s[i] === ']' && stack[stack.length - 1] === '[') ||
        (s[i] === '}' && stack[stack.length - 1] === '{')
      ) {
        stack.pop();
      } else {
        return 'NO';
      }
    }
  }
  if (stack.length) {
    return 'NO';
  }
  return 'YES';
}

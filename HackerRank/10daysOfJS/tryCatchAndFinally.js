function reverseString(s) {
  try {
    s = s
      .split('')
      .reverse()
      .join('');
    console.log(s);
  } catch (err) {
    console.log(err.message);
    console.log(s);
  }
}

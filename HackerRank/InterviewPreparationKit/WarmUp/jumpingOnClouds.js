function jumpingOnClouds(c) {
  let jump = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] === 0) {
      i = i + 2;
    } else {
      i++;
    }
    jump++;
  }
  return jump;
}

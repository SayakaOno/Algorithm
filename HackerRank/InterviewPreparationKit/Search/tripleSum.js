function triplets(a, b, c) {
  [a, b, c].forEach(array => array.sort((a, b) => a - b));

  a = [...new Set(a)];
  b = [...new Set(b)];
  c = [...new Set(c)];

  let answer = 0;
  let countA = 0;
  let countC = 0;

  for (let i = 0; i < b.length; i++) {
    while (a[countA] <= b[i]) {
      countA++;
    }
    while (c[countC] <= b[i]) {
      countC++;
    }
    answer += countA * countC;
  }
  return answer;
}

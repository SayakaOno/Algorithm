function getMinimumCost(k, c) {
  if (k === c.length) {
    c.length = k;
    return c.reduce((a, sum) => a + sum, 0);
  }
  let newC = c.sort((a, b) => b - a);
  let answer = 0;
  let counter = Math.floor(c.length / k);

  for (let i = 0; i < counter; i++) {
    let subArray = newC.splice(0, k);
    answer = answer + subArray.reduce((a, sum) => a + sum, 0) * (i + 1);
    if (i + 1 === counter && newC.length) {
      let sum = newC.reduce((a, sum) => a + sum, 0) * (i + 2);
      answer += sum;
    }
  }
  return answer;
}

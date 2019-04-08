function luckBalance(k, contests) {
  let important = [];
  let unimportant = [];
  let answer = 0;
  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 1) {
      important.push(contests[i][0]);
    } else {
      unimportant.push(contests[i][0]);
    }
  }
  if (k >= important.length) {
    contests.forEach(e => {
      answer += e[0];
    });
    return answer;
  }
  answer = unimportant.reduce((a, b) => a + b, 0);
  let hasToWin = important.length - k;
  important.sort((a, b) => a - b);
  for (let i = 0; i < important.length; i++) {
    if (i < hasToWin) {
      answer -= important[i];
    } else {
      answer += important[i];
    }
  }
  return answer;
}

function repeatedString(s, n) {
  let length = s.length;
  if (length === 1) {
    if (s === 'a') {
      return n;
    } else {
      return 0;
    }
  }
  let repeat = Math.trunc(n / length);
  let remainder = n % length;
  let numberOfAInS = 0;
  let answer = 0;
  for (let i = 0; i < length; i++) {
    if (s[i] === 'a') {
      numberOfAInS++;
      if (i < remainder) {
        answer++;
      }
    }
  }
  answer += numberOfAInS * repeat;
  return answer;
}

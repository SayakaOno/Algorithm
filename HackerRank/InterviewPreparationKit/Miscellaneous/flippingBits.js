function flippingBits(N) {
  let n = N;
  let numbers = [];
  while (n >= 2) {
    numbers.push(n % 2);
    n = Math.floor(n / 2);
  }
  if (N > 0) {
    numbers.push(1);
  }
  let zeros = Array(32 - numbers.length);
  zeros.fill(0);
  numbers.push(...zeros);
  let answer = 0;
  let bit = 1;
  for (let i = 0; i < 32; i++) {
    if (numbers[i] === 0) {
      answer += bit;
    }
    bit *= 2;
  }
  return answer;
}

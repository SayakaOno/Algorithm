function main() {
  // const nd = readLine().split(' ');
  // const n = parseInt(nd[0], 10);
  // const d = parseInt(nd[1], 10);
  // const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

  let move = d % n;
  if (!move) {
    console.log(a.join(' '));
    return;
  }
  let answer = [...a.slice(move, a.length), ...a.slice(0, move)];
  console.log(answer.join(' '));
}

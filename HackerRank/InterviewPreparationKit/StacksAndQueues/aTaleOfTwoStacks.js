function processData(input) {
  let array = input.split('\n');
  let stackA = [];
  let stackB = [];

  for (let i = 1; i <= array[0]; i++) {
    switch (array[i]) {
      case '2':
        if (!stackB.length) {
          while (stackA.length) {
            stackB.push(stackA.pop());
          }
        }
        stackB.pop();
        break;
      case '3':
        if (!stackB.length) {
          while (stackA.length) {
            stackB.push(stackA.pop());
          }
        }
        console.log(stackB[stackB.length - 1]);
        break;
      default:
        let sArray = array[i].split(' ');
        stackA.push(sArray[1]);
        break;
    }
  }
}

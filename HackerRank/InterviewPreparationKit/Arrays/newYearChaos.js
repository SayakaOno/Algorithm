function minimumBribes(q) {
  let array = q.slice();
  let counter = q.length;
  let swap = 0;
  let bribe = { count: 0, index: null };
  while (counter > 2) {
    for (let i = 0; i < counter - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap++;
        if (bribe.index === i - 1) {
          bribe.count++;
        } else {
          bribe.index = i;
          bribe.count++;
        }
        if (bribe.count >= 3) {
          console.log('Too chaotic');
          return;
        }
      } else {
        bribe.count = 0;
        bribe.index = null;
      }
    }
    bribe.count = 0;
    bribe.index = null;
    counter--;
  }
  console.log(swap);
}

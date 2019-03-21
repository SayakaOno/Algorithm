function countSwaps(a) {
  let length = a.length;
  let counter = 0;
  while (0 < length) {
    for (let i = 0; i < length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        counter++;
      }
    }
    length--;
  }
  console.log(`Array is sorted in ${counter} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}

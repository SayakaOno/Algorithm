function minimumSwaps(arr) {
  let newArray = arr.slice();
  let index = 0;
  let counter = 0;
  while (index < arr.length - 1) {
    for (let i = index; i < newArray.length; i++) {
      if (newArray[index] === index + 1) {
        break;
      }
      if (newArray[i] === index + 1) {
        newArray[i] = newArray[index];
        counter++;
        break;
      }
    }
    index++;
  }
  return counter;
}

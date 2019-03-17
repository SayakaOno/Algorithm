function rotLeft(a, d) {
  let moves = d % a.length;
  let newArray = [];
  let counter = moves;
  do {
    newArray.push(a[counter]);
    if (counter === a.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
  } while (moves !== counter);
  return newArray;
}

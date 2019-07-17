/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a
    .split('')
    .reverse()
    .map(n => +n);
  b = b
    .split('')
    .reverse()
    .map(n => +n);
  let newArray = [];
  let length = Math.max(a.length, b.length);
  for (let i = 0; i < length; i++) {
    let num1 = +a[i] || 0;
    let num2 = +b[i] || 0;
    let sum = (newArray[i] || 0) + num1 + num2;
    if (sum > 1) {
      newArray[i] = sum % 2;
      newArray.push(1);
    } else {
      newArray[i] = sum;
    }
  }
  return newArray.reverse().join('');

  // Long answer
  // let longArray;
  // let shortArray;
  // if (a.length >= b.length) {
  //   longArray = a;
  //   shortArray = b;
  // } else {
  //   longArray = b;
  //   shortArray = a;
  // }
  // let next = false;
  // for (let i = 0; i < longArray.length; i++) {
  //   if (shortArray[i] || shortArray[i] === 0) {
  //     if (next) {
  //       if (longArray[i] + shortArray[i] === 2) {
  //         longArray[i] = 1;
  //       } else if (longArray[i] + shortArray[i] === 1) {
  //         longArray[i] = 0;
  //       } else if (longArray[i] + shortArray[i] === 0) {
  //         longArray[i] = 1;
  //         next = false;
  //       }
  //     } else {
  //       if (longArray[i] + shortArray[i] === 2) {
  //         longArray[i] = 0;
  //         next = true;
  //       } else {
  //         longArray[i] += shortArray[i];
  //         next = false;
  //       }
  //     }
  //   } else {
  //     if (next) {
  //       if (longArray[i] === 1) {
  //         longArray[i] = 0;
  //       } else {
  //         longArray[i] = 1;
  //         next = false;
  //       }
  //     } else {
  //       break;
  //     }
  //   }
  // }
  // if (next) {
  //   longArray.push(1);
  // }
  // return longArray.reverse().join('');
};

var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  strs.sort((a, b) => a.length > b.length);
  let tempAns = strs.shift();
  if (!tempAns) {
    return '';
  }
  while (tempAns.length) {
    for (let n = 0; n < strs.length; n++) {
      if (strs[n].search(tempAns) !== 0) {
        break;
      }
      if (n === strs.length - 1) {
        return tempAns;
      }
    }
    if (tempAns.length === 1) {
      return '';
    }
    tempAns = tempAns.substr(0, tempAns.length - 1);
  }
};

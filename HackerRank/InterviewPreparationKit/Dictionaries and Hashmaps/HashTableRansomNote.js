function checkMagazine(magazine, note) {
  let map = {};
  for (let elem of magazine) {
    if (!map[elem]) {
      map[elem] = 1;
    } else {
      map[elem] += 1;
    }
  }
  for (let elem of note) {
    if (map[elem]) {
      map[elem] -= 1;
    } else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
}

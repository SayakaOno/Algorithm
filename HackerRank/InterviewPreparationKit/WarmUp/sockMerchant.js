function sockMerchant(n, ar) {
  let map = {};
  let pair = 0;

  for (let i = 0; i < n; i++) {
    if (typeof map[ar[i]] !== 'number') {
      map[ar[i]] = 1;
    } else {
      map[ar[i]]++;
      if (map[ar[i]] == 2) {
        pair++;
        map[ar[i]] = 0;
      }
    }
  }
  return pair;
}

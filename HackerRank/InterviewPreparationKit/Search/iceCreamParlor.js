function whatFlavors(cost, money) {
  let map = {};
  for (let i = 0; i < cost.length; i++) {
    if (cost[i] >= money) {
      continue;
    }
    if (map[cost[i]] || map[cost[i]] === 0) {
      if (map[cost[i]] > cost[i]) {
        console.log(`${i + 1} ${map[cost[i]]}`);
      } else {
        console.log(`${map[cost[i]]} ${i + 1}`);
      }
      return;
    }
    map[money - cost[i]] = i + 1;
  }
}

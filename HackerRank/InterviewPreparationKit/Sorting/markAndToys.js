function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  if (prices[0] > k) {
    return 0;
  }
  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
    if (totalPrice > k) {
      return i;
    }
  }
}

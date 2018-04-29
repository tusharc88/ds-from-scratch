function getMaxProfit(stockPricesYesterday) {
  let min = stockPricesYesterday[0],
    maxProfit = 0,
    profit = 0;

  for (let i = 1; i < stockPricesYesterday.length; i++) {
    let current = stockPricesYesterday[i];

    if (profit < current - min) {
      profit = current - min;
    }

    if (current < min) {
      min = current;
      profit = 0;
    }

    if (maxProfit < profit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

module.exports = getMaxProfit;

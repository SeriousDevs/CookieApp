export const statisticsLogic = (totalClicks, upgrades, cookies) => {
  const totalUpgrades = upgrades.reduce((acc, el) => (acc += el.amount), 0);
  const totalUpgradesNetWorth = upgrades.reduce((acc, el) => {
    let currentPrice = el.price;
    for (let i = 0; i < el.amount; i++) {
      currentPrice = currentPrice / 2;
      acc += acc = currentPrice;
    }
    return acc;
  }, 0);

  const netWorth = cookies + totalUpgradesNetWorth;
  const obj = {
    netWorth,
    totalUpgrades,
    totalClicks,
  };

  return obj;
};

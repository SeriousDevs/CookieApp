export const fromServerFix = (gameAcc) => {
  const result = {
    ...gameAcc,
    networth: Number(gameAcc.networth),
    clicks: Number(gameAcc.clicks),
    cookies: Number(gameAcc.cookies),
    clickUpgrade: {
      ...gameAcc.clickUpgrade,
      currentValue: Number(gameAcc.clickUpgrade.currentValue),
      baseValue: Number(gameAcc.clickUpgrade.baseValue),
      basePrice: Number(gameAcc.clickUpgrade.basePrice),
    },
    upgrades: [
      ...gameAcc.upgrades.map((upgr) => {
        return {
          ...upgr,
          currentValue: Number(
            upgr.currentValue === "0" ? upgr.baseValue : upgr.currentValue
          ),
          basePrice: Number(upgr.basePrice),
          baseValue: Number(upgr.baseValue),
        };
      }),
    ],
  };

  return result;
};

export const toServerFix = (gameAcc) => {
  const result = {
    ...gameAcc,
    networth: gameAcc.networth.toString(),
    clicks: gameAcc.clicks.toString(),
    cookies: gameAcc.cookies.toString(),
    clickUpgrade: {
      ...gameAcc.clickUpgrade,
      currentValue: gameAcc.clickUpgrade.currentValue.toString(),
      basePrice: gameAcc.clickUpgrade.basePrice.toString(),
      baseValue: gameAcc.clickUpgrade.baseValue.toString(),
    },
    upgrades: [
      ...gameAcc.upgrades.map((up) => {
        return {
          ...up,
          currentValue: up.currentValue.toString(),
          basePrice: up.basePrice.toString(),
          baseValue: up.baseValue.toString(),
        };
      }),
    ],
  };

  return result;
};

const COUNT_ABBRS = [
  "",
  "K",
  "M",
  "B",
  "T",
  "Qua",
  "Qui",
  "aa",
  "bb",
  "cc",
  "R_X_Y",
  "A_L_G",
];

export const seriousNumbers = (count, withAbbr = true, decimals = 2) => {
  if (count < 1) return count;
  const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
  let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
  if (withAbbr) {
    result += `${COUNT_ABBRS[i]}`;
  }
  return result;
};

/**
 * It transforms the items object from sqlite into a custom format
 * @param {Array<>} items list of clusters object from the sqlite
 * @returns List of custom formatted pod data
 */
export const transformEarningData = items => {
  const earnings = [];
  try {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      earnings.push({
        fee: { text: `${(item.gasPrice * item.gasUsed) / 1e18} ETH` },
        earned: { text: `${item.earned / 1e18} SSV` },
        liquidatedAtBlock: { text: item.earnedAtBlock },
        txHash: { text: item.hash },
      });
    }
  } catch (e) {
    console.log(e);
  }
  return earnings;
};

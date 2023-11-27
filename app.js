let MetaApi = require('metaapi.cloud-sdk').default;

let token = process.env.TOKEN || '<put in your token here>';
let accountId = process.env.ACCOUNT_ID || '<put in your account id here>';

const api = new MetaApi(token);

async function fetchOpenTradesAndSummarize() {
  try {
    const account = await api.metatraderAccountApi.getAccount(accountId);
    await account.deploy();
    await account.waitConnected();

    const connection = account.getRPCConnection();
    await connection.connect();
    await connection.waitSynchronized();

    const openTrades = await connection.getOrders();
    console.log('Fetched open trades:', openTrades);

    const tradeSummary = openTrades.reduce((summary, trade) => {
      const key = `${trade.symbol}_${trade.type}`;
      if (!summary[key]) {
        summary[key] = {
          symbol: trade.symbol,
          type: trade.type,
          volume: 0,
          profit: 0,
          swap: 0
        };
      }
      summary[key].volume += trade.volume;
      summary[key].profit += trade.profit;
      summary[key].swap += trade.swap;
      return summary;
    }, {});

    const tradeSummaryArray = Object.values(tradeSummary);
    console.log('Trade summary:', tradeSummaryArray);

    await connection.disconnect();
  } catch (err) {
    console.error(err);
  }
}

fetchOpenTradesAndSummarize();

import MetaApi from 'metaapi.cloud-sdk';

const token = process.env.TOKEN || '<put in your token here>';
const accountId = process.env.ACCOUNT_ID || '<put in your account id here>';
const api = new MetaApi(token);

const fetchOpenTrades = async () => {
  try {
    const account = await api.metatraderAccountApi.getAccount(accountId);
    await account.deploy();
    await account.waitConnected();

    const connection = account.getRPCConnection();
    await connection.connect();
    await connection.waitSynchronized();

    const openTrades = await connection.getOrders();
    await connection.disconnect();
    return openTrades;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export { fetchOpenTrades };

import axios from 'axios';

export default {
  getRate,
  getConfirmedTransactions,
  getMarketPrice
}

async function getRate(coins) {
  const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
  return res.data
}

async function getMarketPrice(){
  const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5days&format=json&cors=true`);
  return res.data
}



async function getConfirmedTransactions(){

}

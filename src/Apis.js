export const TRENDING_COINS =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h";
export const GLOBAL_STATE = "https://api.coingecko.com/api/v3/global";
export const SINGLE_CRYPTO = (id) => {
  return `https://api.coingecko.com/api/v3/coins/${id}`;
};
export const EXCHANGES = (page) => {
  return `https://api.coingecko.com/api/v3/exchanges?per_page=50&page=${page}`;
};
export const COIN_LIST = (currency, page) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=false&price_change_percentage=1h%2C24h`;
};
export const HISTORCAL_CHART = (id, days, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

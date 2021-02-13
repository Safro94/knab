const { getByCode } = require('../integration/cryptocurrencyClient');
const { mapCryptocurrency } = require('../utils/mappers');
const cache = require('../utils/cache');

const CACHE_TIME_SECONDS = 60;

class CryptocurrencyService {
	async getByCode(code) {
		const key = `crypto_${code}`;
		const cachedData = cache.get(key);
		if (cachedData) return cachedData;

		const crypto = await getByCode(code);
		if (crypto && !crypto.data) return;

		const mappedCryptocurrency = mapCryptocurrency(crypto.data, code);
		cache.set(key, mappedCryptocurrency, CACHE_TIME_SECONDS);

		return mappedCryptocurrency;
	}

	calculateQuoteByCurrency(price, rates) {
		return rates.map(({ rate, currency }) => {
			return { quote: parseFloat(price * rate).toFixed(2), currency };
		});
	}
}

module.exports = new CryptocurrencyService();

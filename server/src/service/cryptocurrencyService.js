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
		if (crypto && !crypto.data) return { error: crypto.status.error_code };

		const mappedCryptocurrency = mapCryptocurrency(crypto.data, code);
		cache.set(key, mappedCryptocurrency, CACHE_TIME_SECONDS);

		return mappedCryptocurrency;
	}
}

module.exports = new CryptocurrencyService();

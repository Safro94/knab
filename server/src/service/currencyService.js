const { getRates } = require('../integration/currencyClient');
const { mapRates } = require('../utils/mappers');
const cache = require('../utils/cache');

// 6 hours
const CACHE_TIME_SECONDS = 60 * 60 * 6;

class CurrencyService {
	async getRates() {
		const key = 'currencyRates';
		const cachedData = cache.get(key);
		if (cachedData) return cachedData;

		const currencyRates = await getRates();
		if (currencyRates && !currencyRates.rates) return [];

		const mappedRates = mapRates(currencyRates.rates);

		cache.set(key, mappedRates, CACHE_TIME_SECONDS);

		return mappedRates;
	}
}

module.exports = new CurrencyService();

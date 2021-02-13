const { getByCode } = require('../integration/cryptocurrencyClient');

class CryptocurrencyService {
	async getByCode(code) {
		const crypto = await getByCode(code);
		if (crypto && !crypto.data) return;

		return crypto.data;
	}
}

module.exports = new CryptocurrencyService();

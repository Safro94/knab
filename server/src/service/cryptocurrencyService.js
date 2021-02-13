const { getByCode } = require('../integration/cryptocurrencyClient');
const { mapCryptocurrency } = require('../utils/mappers');

class CryptocurrencyService {
	async getByCode(code) {
		const crypto = await getByCode(code);
		if (crypto && !crypto.data) return;

		return mapCrypto(crypto.data, code);
	}
}

module.exports = new CryptocurrencyService();

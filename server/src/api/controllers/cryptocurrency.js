const CryptocurrencyService = require('../../service/cryptocurrencyService');
const CurrencyService = require('../../service/currencyService');

const getByCode = async (req, res) => {
	const { code } = req.params;
	const crypto = await CryptocurrencyService.getByCode(code.toUpperCase());
	if (!crypto) return res.json();

	const rates = await CurrencyService.getRates();
	crypto.quotes = CryptocurrencyService.calculateQuoteByCurrency(
		crypto.price,
		rates
	);

	res.json(crypto);
};

module.exports = { getByCode };

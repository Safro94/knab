const CryptocurrencyService = require('../../service/cryptocurrencyService');

const getByCode = async (req, res) => {
	const { code } = req.params;
	const crypto = await CryptocurrencyService.getByCode(code);
	if (!crypto) return res.status(404).send('Cryptocurrency not found');

	res.json(crypto);
};

module.exports = { getByCode };

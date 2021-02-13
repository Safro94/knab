const CryptocurrencyService = require('../../service/cryptocurrencyService');

const getByCode = async (req, res, next) => {
	const { code } = req.params;
	const crypto = await CryptocurrencyService.getByCode(code);
	if (crypto.error === 400) {
		res.status(404);
		return next(new Error('Cryptocurrency not found'));
	}

	res.json(crypto);
};

module.exports = { getByCode };

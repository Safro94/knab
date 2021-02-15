const fetch = require('../utils/fetch');

const headers = { 'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY };

const getByCode = async code => {
	const endpoint = `${process.env.COIN_MARKET_CAP_API_URL}/cryptocurrency/quotes/latest?symbol=${code}`;

	const result = await fetch({ url: endpoint, headers });

	return result;
};

module.exports = {
	getByCode,
};

const fetch = require('../utils/fetch');

const CURRENCY_CODE_DEFAULT = 'USD';

const getRates = async () => {
	const endpoint = `${process.env.EXCHANGE_RATES_API_URL}/latest?base=${CURRENCY_CODE_DEFAULT}`;

	const result = await fetch({ url: endpoint });

	return result;
};

module.exports = {
	getRates,
};

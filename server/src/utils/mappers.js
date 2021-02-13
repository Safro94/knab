const ratesConstants = require('../constants/rates');

const mapCryptocurrency = (crypto, code) => {
	const { id, name, symbol, quote } = crypto[code];

	return {
		id,
		name,
		code: symbol,
		price: parseFloat(quote.USD.price).toFixed(2),
	};
};

const mapRates = rates => {
	const filteredRates = Object.values(ratesConstants).map(item => ({
		rate: rates[item],
		currency: item,
	}));

	return filteredRates;
};

module.exports = { mapCryptocurrency, mapRates };

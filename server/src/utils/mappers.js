const currencies = require('../constants/currencies');

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
	const filteredRates = currencies.map(currency => ({
		rate: rates[currency.code],
		currencyCode: currency.code,
		currencyName: currency.name,
	}));

	return filteredRates;
};

module.exports = { mapCryptocurrency, mapRates };

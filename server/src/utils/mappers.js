const mapCryptocurrency = (crypto, code) => {
	const { id, name, symbol, quote } = crypto[code];

	return {
		id,
		name,
		code: symbol,
		price: quote.USD.price,
	};
};

module.exports = { mapCryptocurrency };

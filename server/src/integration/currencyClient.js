const fetch = require('../utils/fetch');

const CURRENCY_CODE_DEFAULT = 'USD';

const getRates = async () => {
	const endpoint = `${process.env.EXCHANGE_RATES_API_URL}/latest?base=${CURRENCY_CODE_DEFAULT}`;

	const result = await fetch({ url: endpoint });

	// const result = {
	// 	rates: {
	// 		CAD: 1.2733729765,
	// 		HKD: 7.7525602907,
	// 		ISK: 128.6752560291,
	// 		PHP: 48.0517013545,
	// 		DKK: 6.1414767096,
	// 		HUF: 296.3908159894,
	// 		CZK: 21.2694086554,
	// 		GBP: 0.7247522299,
	// 		RON: 4.0259332673,
	// 		SEK: 8.3265609514,
	// 		IDR: 13987.7518995705,
	// 		INR: 72.5776346217,
	// 		BRL: 5.3932936901,
	// 		RUB: 74.1703832177,
	// 		HRK: 6.2528906508,
	// 		JPY: 105.0132144037,
	// 		THB: 29.9099768748,
	// 		CHF: 0.8922200198,
	// 		EUR: 0.8259002313,
	// 		MYR: 4.0425338619,
	// 		BGN: 1.6152956723,
	// 		TRY: 7.0209778659,
	// 		CNY: 6.4591179386,
	// 		NOK: 8.4943838784,
	// 		NZD: 1.3908159894,
	// 		ZAR: 14.6483316815,
	// 		USD: 1,
	// 		MXN: 20.0293194582,
	// 		SGD: 1.3268913115,
	// 		AUD: 1.2938553023,
	// 		ILS: 3.2521473406,
	// 		KRW: 1105.0379914106,
	// 		PLN: 3.7164684506,
	// 	},
	// 	base: 'USD',
	// 	date: '2021-02-12',
	// };

	return result;
};

module.exports = {
	getRates,
};

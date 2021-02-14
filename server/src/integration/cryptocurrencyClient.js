const fetch = require('../utils/fetch');

const headers = { 'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY };

const getByCode = async code => {
	const endpoint = `${process.env.COIN_MARKET_CAP_API_URL}/cryptocurrency/quotes/latest?symbol=${code}`;
	// const result = await fetch({ url: endpoint, headers });

	const result = {
		status: {
			timestamp: '2021-02-13T20:48:47.554Z',
			error_code: 400,
			error_message: 'Invalid value for "symbol": "123"',
			elapsed: 0,
			credit_count: 0,
			notice: null,
		},
	};

	// const result = {
	// 	status: {
	// 		timestamp: '2021-02-12T20:00:16.725Z',
	// 		error_code: 0,
	// 		error_message: null,
	// 		elapsed: 20,
	// 		credit_count: 1,
	// 		notice: null,
	// 	},
	// 	data: {
	// 		BTC: {
	// 			id: 1,
	// 			name: 'Bitcoin',
	// 			symbol: 'BTC',
	// 			slug: 'bitcoin',
	// 			num_market_pairs: 9674,
	// 			date_added: '2013-04-28T00:00:00.000Z',
	// 			max_supply: 21000000,
	// 			circulating_supply: 18626800,
	// 			total_supply: 18626800,
	// 			is_active: 1,
	// 			platform: null,
	// 			cmc_rank: 1,
	// 			is_fiat: 0,
	// 			last_updated: '2021-02-12T19:59:02.000Z',
	// 			quote: {
	// 				USD: {
	// 					price: 47294.31940016969,
	// 					volume_24h: 78565694907.55563,
	// 					percent_change_1h: -0.95352839,
	// 					percent_change_24h: -0.67265827,
	// 					percent_change_7d: 26.56963015,
	// 					percent_change_30d: 32.25341853,
	// 					market_cap: 880941828603.0808,
	// 					last_updated: '2021-02-12T20:01:05.000Z',
	// 				},
	// 			},
	// 		},
	// 	},
	// };

	return result;
};

module.exports = {
	getByCode,
};

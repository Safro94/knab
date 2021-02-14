const { mapCryptocurrency, mapRates } = require('../mappers');

describe('Mappers', () => {
	const cryptocurrency = {
		BTC: {
			id: 1,
			name: 'Bitcoin',
			symbol: 'BTC',
			quote: {
				USD: {
					price: 100,
				},
			},
		},
	};

	it('should return an object mapped correctly when mapCrypto is called', () => {
		const code = 'BTC';
		const expectedResult = {
			id: 1,
			name: 'Bitcoin',
			code: 'BTC',
			price: '100.00',
		};

		const result = mapCryptocurrency(cryptocurrency, code);

		expect(result).toStrictEqual(expectedResult);
	});

	it('should return an object mapped correctly when mapRates is called', () => {
		const rates = { USD: 1, EUR: 2, BRL: 3, GBP: 4, AUD: 5 };

		const expectedResult = [
			{ rate: 1, currencyCode: 'USD', currencyName: 'US Dollar' },
			{ rate: 2, currencyCode: 'EUR', currencyName: 'Euro' },
			{ rate: 3, currencyCode: 'BRL', currencyName: 'Brazilian Real' },
			{ rate: 4, currencyCode: 'GBP', currencyName: 'British Pound' },
			{ rate: 5, currencyCode: 'AUD', currencyName: 'Australian Dollar' },
		];

		const result = mapRates(rates);

		expect(result).toStrictEqual(expectedResult);
	});
});

const { mapCryptocurrency } = require('../mappers');

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
			price: 100,
		};

		const result = mapCryptocurrency(cryptocurrency, code);

		expect(result).toStrictEqual(expectedResult);
	});
});

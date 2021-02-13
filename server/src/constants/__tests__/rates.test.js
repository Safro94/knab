const rates = require('../rates');

describe('Rates', () => {
	it('should return an object with the rates', () => {
		const expectedRates = {
			USD: 'USD',
			EUR: 'EUR',
			BRL: 'BRL',
			GBP: 'GBP',
			AUD: 'AUD',
		};

		expect(rates).toEqual(expectedRates);
	});
});

const currencies = require('../currencies');

describe('Currencies', () => {
	it('should return an array with the currencies', () => {
		const expectedCurrencies = [
			{ code: 'USD', name: 'US Dollar' },
			{ code: 'EUR', name: 'Euro' },
			{ code: 'BRL', name: 'Brazilian Real' },
			{ code: 'GBP', name: 'British Pound' },
			{ code: 'AUD', name: 'Australian Dollar' },
		];

		expect(currencies).toEqual(expectedCurrencies);
	});
});

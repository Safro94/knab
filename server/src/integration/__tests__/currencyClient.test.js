const fetch = require('../../utils/fetch');
const { getRates } = require('../currencyClient');

jest.mock('../../utils/fetch', () => {
	return jest.fn();
});

describe('Currency Client', () => {
	const mockedResult = {
		rates: {
			USD: 1,
			EUR: 2,
		},
	};

	beforeEach(() => {
		fetch.mockImplementation(() => mockedResult);
	});

	it('should call fetch with an url', async () => {
		//Act
		await getRates();

		//Assert
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith({
			url: `${process.env.EXCHANGE_RATES_API_URL}/latest?base=USD`,
		});
	});
	it('should return the rates', async () => {
		//Act
		const result = await getRates();

		//Assert
		expect(result).toEqual(mockedResult);
	});
});

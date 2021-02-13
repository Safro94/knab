const fetch = require('../../utils/fetch');
const { getByCode } = require('../cryptocurrencyClient');

jest.mock('../../utils/fetch', () => {
	return jest.fn();
});

describe('Cryptocurrency Client', () => {
	const code = 'BTC';
	const headers = { 'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY };
	const mockedResult = {
		data: {
			id: 1,
			name: 'Bitcoin',
			symbol: 'BTC',
		},
	};

	beforeEach(() => {
		fetch.mockImplementation(() => mockedResult);
	});

	it('should call fetch with an url and headers', async () => {
		//Act
		await getByCode(code);

		//Assert
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith({
			url: `${process.env.COIN_MARKET_CAP_API_URL}/cryptocurrency/quotes/latest?symbol=${code}`,
			headers,
		});
	});
	it('should return a cryptocurrency', async () => {
		//Act
		const result = await getByCode(code);

		//Assert
		expect(result).toEqual(mockedResult);
	});
});

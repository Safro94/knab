process.env.COIN_MARKET_CAP_API_URL = 'https://cmctesturl.com';
process.env.COIN_MARKET_CAP_API_KEY = 'test';
process.env.EXCHANGE_RATES_API_URL = 'https://ratestesturl.com';

jest.doMock('./src/utils/fetch');

afterEach(() => {
	jest.clearAllMocks();
});

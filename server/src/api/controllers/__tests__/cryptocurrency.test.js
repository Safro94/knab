const { getByCode } = require('../cryptocurrency');
const CryptocurrencyService = require('../../../service/cryptocurrencyService');
const CurrencyService = require('../../../service/currencyService');
const { mockReq, mockRes } = require('../../../utils/test-utils');

jest.mock('../../../service/cryptocurrencyService', () => {
	return {
		getByCode: jest.fn(),
		calculateQuoteByCurrency: jest.fn(() => [
			{ quote: 100, currency: 'USD' },
			{ quote: 200, currency: 'EUR' },
		]),
	};
});

const mockRates = [
	{ rate: 1, currency: 'USD' },
	{ rate: 2, currency: 'EUR' },
];

jest.mock('../../../service/currencyService', () => {
	return {
		getRates: jest.fn(() => mockRates),
	};
});

describe('Cryptocurrency Controller', () => {
	const res = mockRes();
	const req = mockReq({
		params: { code: 'btc' },
	});

	const expectedResult = {
		code: 'BTC',
		id: 1,
		price: 100,
		quotes: [
			{ currency: 'USD', quote: 100 },
			{ currency: 'EUR', quote: 200 },
		],
	};

	it('should only call CryptocurrencyService.getByCode and return an empty json when getByCode does not return data', async () => {
		//Arrange
		CryptocurrencyService.getByCode.mockImplementation(() => null);

		//Act
		await getByCode(req, res);

		//Assert
		expect(CryptocurrencyService.getByCode).toHaveBeenCalledTimes(1);
		expect(CryptocurrencyService.getByCode).toHaveBeenCalledWith(
			req.params.code.toUpperCase()
		);

		expect(CurrencyService.getRates).not.toHaveBeenCalled();

		expect(
			CryptocurrencyService.calculateQuoteByCurrency
		).not.toHaveBeenCalled();

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith();
	});

	it('should call all the services and return an object with the correct data when getByCode returns data', async () => {
		//Arrange
		const mockCrypto = { id: 1, code: 'BTC', price: 100 };
		CryptocurrencyService.getByCode.mockImplementation(() => mockCrypto);

		//Act
		await getByCode(req, res);

		//Assert
		expect(CryptocurrencyService.getByCode).toHaveBeenCalledTimes(1);
		expect(CryptocurrencyService.getByCode).toHaveBeenCalledWith(
			req.params.code.toUpperCase()
		);

		expect(CurrencyService.getRates).toHaveBeenCalledTimes(1);
		expect(CurrencyService.getRates).toHaveBeenCalledWith();

		expect(
			CryptocurrencyService.calculateQuoteByCurrency
		).toHaveBeenCalledTimes(1);
		expect(CryptocurrencyService.calculateQuoteByCurrency).toHaveBeenCalledWith(
			mockCrypto.price,
			mockRates
		);

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith(expectedResult);
	});
});

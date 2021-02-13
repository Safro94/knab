const CurrencyService = require('../currencyService');
const { mapRates } = require('../../utils/mappers');
const { getRates } = require('../../integration/currencyClient');
const cache = require('../../utils/cache');

const mockExpectedResult = [
	{ rate: 1, currency: 'USD' },
	{ rate: 2, currency: 'EUR' },
	{ rate: 3, currency: 'BRL' },
	{ rate: 4, currency: 'GBP' },
	{ rate: 5, currency: 'AUD' },
];

jest.mock('../../utils/mappers', () => {
	return {
		mapRates: jest.fn(() => mockExpectedResult),
	};
});

jest.mock('../../utils/cache', () => {
	return {
		get: jest.fn(),
		set: jest.fn(),
	};
});

jest.mock('../../integration/currencyClient', () => {
	return {
		getRates: jest.fn(),
	};
});

describe('CurrencyService Service', () => {
	const key = 'currencyRates';

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should call getRates from client and return an empty object when there are no rates and no cached data', async () => {
		//Arrange
		getRates.mockImplementation(() => ({}));

		//Act
		const result = await CurrencyService.getRates();

		//Assert
		expect(cache.get).toHaveBeenCalledTimes(1);
		expect(cache.get).toHaveBeenCalledWith(key);

		expect(result).toEqual([]);

		expect(getRates).toHaveBeenCalledTimes(1);
		expect(getRates).toHaveBeenCalledWith();
	});

	it('should call getRates from client and return the mapped data when there are rates from the client and no cached data', async () => {
		//Arrange
		const mockedData = {
			rates: {
				USD: 1,
				EUR: 2,
			},
		};

		getRates.mockImplementation(() => mockedData);

		//Act
		const result = await CurrencyService.getRates();

		//Assert
		expect(cache.get).toHaveBeenCalledTimes(1);
		expect(cache.get).toHaveBeenCalledWith(key);

		expect(cache.set).toHaveBeenCalledTimes(1);
		expect(cache.set).toHaveBeenCalledWith(key, mockExpectedResult, 21600);

		expect(mapRates).toHaveBeenCalledTimes(1);
		expect(mapRates).toHaveBeenCalledWith(mockedData.rates);

		expect(result).toEqual(mockExpectedResult);

		expect(getRates).toHaveBeenCalledTimes(1);
		expect(getRates).toHaveBeenCalledWith();
	});

	it('should not call getRates from client and return the mapped data when there is cached data', async () => {
		//Arrange
		cache.get.mockImplementation(() => mockExpectedResult);

		//Act
		const result = await CurrencyService.getRates();

		//Assert
		expect(cache.get).toHaveBeenCalledTimes(1);
		expect(cache.get).toHaveBeenCalledWith(key);

		expect(mapRates).not.toHaveBeenCalled();

		expect(result).toEqual(mockExpectedResult);

		expect(getRates).not.toHaveBeenCalled();
	});
});

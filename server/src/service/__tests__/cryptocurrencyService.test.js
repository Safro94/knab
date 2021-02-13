const CrytocurrencyService = require('../cryptocurrencyService');
const { mapCryptocurrency } = require('../../utils/mappers');
const { getByCode } = require('../../integration/cryptocurrencyClient');
const cache = require('../../utils/cache');

const mockExpectedResult = {
	id: 1,
	name: 'Bitcoin',
	code: 'BTC',
	price: 100,
};

jest.mock('../../utils/mappers', () => {
	return {
		mapCryptocurrency: jest.fn(() => ({
			...mockExpectedResult,
		})),
	};
});

jest.mock('../../utils/cache', () => {
	return {
		get: jest.fn(),
		set: jest.fn(),
	};
});

jest.mock('../../integration/cryptocurrencyClient', () => {
	return {
		getByCode: jest.fn(),
	};
});

describe('Cryptocurrency Service', () => {
	const code = 'BTC';
	const key = `crypto_${code}`;

	it('should call getByCode from client and return an error object when there is no data and no cached data', async () => {
		//Arrange
		const mockedData = { status: { error_code: 400 } };
		const expectedResult = { error: mockedData.status.error_code };
		getByCode.mockImplementation(() => mockedData);

		//Act
		const result = await CrytocurrencyService.getByCode(code);

		//Assert
		expect(cache.get).toHaveBeenCalledTimes(1);
		expect(cache.get).toHaveBeenCalledWith(key);

		expect(result).toEqual(expectedResult);

		expect(getByCode).toHaveBeenCalledTimes(1);
		expect(getByCode).toHaveBeenCalledWith(code);
	});

	it('should call getByCode from client and return the mapped data when there is data from the client and no cached data', async () => {
		//Arrange
		const mockedData = {
			data: {
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
			},
		};

		getByCode.mockImplementation(() => mockedData);

		//Act
		const result = await CrytocurrencyService.getByCode(code);

		//Assert
		expect(cache.get).toHaveBeenCalledTimes(1);
		expect(cache.get).toHaveBeenCalledWith(key);

		expect(cache.set).toHaveBeenCalledTimes(1);
		expect(cache.set).toHaveBeenCalledWith(key, mockExpectedResult, 60);

		expect(mapCryptocurrency).toHaveBeenCalledTimes(1);
		expect(mapCryptocurrency).toHaveBeenCalledWith(mockedData.data, code);

		expect(result).toEqual(mockExpectedResult);

		expect(getByCode).toHaveBeenCalledTimes(1);
		expect(getByCode).toHaveBeenCalledWith(code);
	});

	it('should not call getByCode from client and return the mapped data when there is cached data', async () => {
		//Arrange
		cache.get.mockImplementation(() => mockExpectedResult);

		//Act
		const result = await CrytocurrencyService.getByCode(code);

		//Assert
		expect(cache.get).toHaveBeenCalledTimes(1);
		expect(cache.get).toHaveBeenCalledWith(key);

		expect(mapCryptocurrency).not.toHaveBeenCalled();

		expect(result).toEqual(mockExpectedResult);

		expect(getByCode).not.toHaveBeenCalled();
	});
});

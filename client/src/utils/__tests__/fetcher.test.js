import fetcher from '../fetcher';
import axios from '../axios';

jest.mock('../axios');

describe('Fetcher', () => {
	it('should return a response', async () => {
		const data = { ports: [] };
		axios.get.mockImplementation(() => Promise.resolve({ data }));

		const result = await fetcher({
			url: 'test',
		});

		expect(axios.get).toBeCalledTimes(1);
		expect(axios.get.mock.calls[0][0]).toBe('test');
		expect(result).toEqual(data);
	});

	it('should return an error', async () => {
		const error = { error: 'error' };
		axios.get.mockImplementation(() => Promise.reject(error));

		const result = await fetcher({
			url: 'test',
		});

		expect(axios.get).toBeCalledTimes(1);
		expect(axios.get.mock.calls[0][0]).toBe('test');
		expect(result).toEqual(error);
	});
});

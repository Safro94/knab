import { GET_CRYPTO_ENDPOINT } from '../endpoints';

describe('Endpoints', () => {
	it('should return the GET_CRYPTO_ENDPOINT', () => {
		const expectedEndpoint = '/api/cryptocurrency/';
		expect(GET_CRYPTO_ENDPOINT).toBe(expectedEndpoint);
	});
});

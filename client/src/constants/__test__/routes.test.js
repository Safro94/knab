import { HOME } from '../routes';

describe('Routes', () => {
	it('should return the home route', () => {
		const expectedResult = '/';
		expect(HOME).toBe(expectedResult);
	});
});

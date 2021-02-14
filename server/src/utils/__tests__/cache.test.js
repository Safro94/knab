require('../cache');
const NodeCache = require('node-cache');

jest.mock('node-cache', () => {
	return jest.fn();
});

describe('Cache', () => {
	it('should call NodeCache and return a cache', () => {
		expect(NodeCache).toHaveBeenCalledTimes(1);
		expect(NodeCache).toHaveBeenCalledWith({ stdTTL: 100, checkperiod: 120 });
	});
});

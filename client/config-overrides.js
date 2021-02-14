const path = require('path');
module.exports = function override(config) {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			components: path.resolve(__dirname, 'src/components'),
			constants: path.resolve(__dirname, 'src/constants'),
			containers: path.resolve(__dirname, 'src/containers'),
			hooks: path.resolve(__dirname, 'src/hooks'),
			pages: path.resolve(__dirname, 'src/pages'),
			services: path.resolve(__dirname, 'src/services'),
			utils: path.resolve(__dirname, 'src/utils'),
		},
	};
	return config;
};

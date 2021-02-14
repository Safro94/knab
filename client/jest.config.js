module.exports = {
	moduleDirectories: ['node_modules', 'utils'],
	setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	coverageReporters: ['lcov'],
	coverageDirectory: 'report',
	testPathIgnorePatterns: ['./node_modules/'],
	collectCoverageFrom: [
		'**/*.{js,jsx, ts, tsx}',
		'!**/node_modules/**',
		'!**/__tests__/**',
	],
	moduleNameMapper: {
		'^./index.*': 'identity-obj-proxy',
		'^components(.*)': '<rootDir>/src/components/$1',
		'^constants(.*)': '<rootDir>/src/constants/$1',
		'^containers(.*)': '<rootDir>/src/containers/$1',
		'^services/(.*)': '<rootDir>/src/services/$1',
		'^hooks/(.*)': '<rootDir>/src/hooks/$1',
		'^pages/(.*)': '<rootDir>/src/pages/$1',
		'^utils/(.*)': '<rootDir>/src/utils/$1',
	},
};

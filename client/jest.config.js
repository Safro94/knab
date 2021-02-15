module.exports = {
	moduleDirectories: ['node_modules', 'src'],
	setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	coverageReporters: ['lcov'],
	coverageDirectory: 'report',
	testPathIgnorePatterns: ['./node_modules/'],
	collectCoverageFrom: [
		'**/*.{js,jsx, ts, tsx}',
		'!**/types/**',
		'!**/styles/**',
		'!**/assets/**',
		'!**/node_modules/**',
		'!**/__tests__/**',
	],
};

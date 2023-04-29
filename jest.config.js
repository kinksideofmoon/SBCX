/**
 * @see https://jestjs.io/docs/configuration
 * @type { import('ts-jest').JestConfigWithTsJest }
 */
// eslint-disable-next-line no-undef
module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageProvider: "v8",
	collectCoverageFrom: [
		"src/**/*.ts",
	],
	coverageDirectory: "coverage",
	errorOnDeprecated: true,
	transform: {
		"^.+\\.[tj]sx?$": ["ts-jest", {
			tsconfig: "./test/tsconfig.json",
		}],
	},
	testTimeout: 60_000,
	maxWorkers: 1,
	bail: true,
	testRunner: "<rootDir>/test/_setup/test_runner.ts",
	globalSetup: "<rootDir>/test/_setup/global_setup.ts",
	globalTeardown: "<rootDir>/test/_setup/global_teardown.ts",
	testEnvironment: "<rootDir>/test/_setup/environment.ts",
	setupFilesAfterEnv: [
		"expect-puppeteer",
	],
};

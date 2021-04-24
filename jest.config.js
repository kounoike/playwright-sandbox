module.exports = {
    preset: 'jest-playwright-preset',
    setupFilesAfterEnv: ['./setup-test-framework.js'],
    testRunner : 'jasmine2',
};
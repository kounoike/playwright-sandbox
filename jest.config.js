module.exports = {
    preset: 'jest-playwright-preset',
    setupFilesAfterEnv: ['jest-allure/dist/setup'],
    testRunner : 'jasmine2',
};
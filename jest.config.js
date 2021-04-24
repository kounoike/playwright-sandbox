module.exports = {
    preset: 'jest-playwright-preset',
    setupFilesAfterEnv: ['./setup-test-framework.js'],
    testRunner: 'jasmine2',
    testEnvironmentOptions: {
        'jest-playwright': {
            // Options...
            launchOptions: {
                headless: false
            },
            browsers: [
                {
                    name: 'chromium',
                    launchOptions: {
                        channel: 'chrome',
                        headless: false
                    }
                },
                {
                    name: 'chromium',
                    launchOptions: {
                        channel: 'msedge',
                        headless: false
                    }
                },
                {
                    name: 'firefox',
                    launchOptions: {
                        headless: false
                    }
                }
            ]
        },
    },
};
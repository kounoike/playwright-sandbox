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
                    displayName: 'Chrome',
                    launchOptions: {
                        channel: 'chrome',
                        headless: false
                    }
                },
                {
                    name: 'chromium',
                    displayName: 'Edge',
                    launchOptions: {
                        channel: 'msedge',
                        headless: false
                    }
                },
                {
                    name: 'firefox',
                    displayName: 'Firefox',
                    launchOptions: {
                        headless: false
                    }
                }
            ]
        },
    },
};
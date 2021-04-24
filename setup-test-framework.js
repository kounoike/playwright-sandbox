const registerAllureReporter = require("jest-allure/dist/setup").registerAllureReporter;
const registerAllureImageSnapshot = require("jest-allure-image-snapshot").registerAllureImageSnapshot;
registerAllureReporter();
registerAllureImageSnapshot({customSnapshotsDir: './snapshots'});
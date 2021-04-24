const registerAllureReporter = require("jest-allure/dist/setup").registerAllureReporter;
const registerAllureImageSnapshot = require("jest-allure-image-snapshot").registerAllureImageSnapshot;
// registerAllureReporter(); // 自分で呼ばなくてもjest-allure/dist/setupをrequireするだけで大丈夫
registerAllureImageSnapshot({customSnapshotsDir: './snapshots'});
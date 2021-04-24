// beforeAll(async () => {
// })

describe(`UA Parser ${global['jest-playwright'].displayName}`, () => {
  it("ブラウザUA確認", async () => {
    reporter
      .description("ブラウザUA確認ですくりぷしょん")
      .addEnvironment('browser', global['jest-playwright'].displayName)
    await page.goto('https://faisalman.github.io/ua-parser-js/')
    await page.waitForTimeout(1000)
    const image = await page.screenshot({fullPage: true})
    reporter.addAttachment(`Screenshot-${global['jest-playwright'].displayName}`, image, "image/png")
  })
})


describe(`Wikipedia ${global['jest-playwright'].displayName}`, () => {

  it("should display page", async () => {
    reporter
      .description("ですくりぷしょん")
      // .severity(Severity.Critical)
      .feature("なんかふぃーちゃー")
      .story("すとーりー")
      .addEnvironment('browser', global['jest-playwright'].displayName)

    // console.log(browserName, browser)
    // console.log(expect.getState())
    await page.goto('https://www.wikipedia.org/')
    const image = await page.screenshot();
    reporter.addAttachment(`Screenshot-${global['jest-playwright'].displayName}`, image, "image/png");
    // expect(image).toMatchImageSnapshot(); whatismybroserの場合は毎回変わるとこがあるのでNG
  })
})
// beforeAll(async () => {
// })

describe(`UA Parser ${browserName}`, () => {
  it("ブラウザUA確認", async () => {
    reporter
      .description("ブラウザUA確認ですくりぷしょん")
      .addEnvironment('browser', browserName)
    await page.goto('https://faisalman.github.io/ua-parser-js/')
    const image = await page.screenshot({fullPage: true})
    reporter.addAttachment(`Screenshot-${browserName}`, image, "image/png")
  })
})


describe(`Wikipedia ${browserName}`, () => {

  it("should display page", async () => {
    reporter
      .description("ですくりぷしょん")
      // .severity(Severity.Critical)
      .feature("なんかふぃーちゃー")
      .story("すとーりー")
      .addEnvironment('browser', browserName)

    // console.log(browserName, browser)
    // console.log(expect.getState())
    await page.goto('https://www.wikipedia.org/')
    const image = await page.screenshot();
    reporter.addAttachment(`Screenshot-${browserName}`, image, "image/png");
    // expect(image).toMatchImageSnapshot(); whatismybroserの場合は毎回変わるとこがあるのでNG
  })
})
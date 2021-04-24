// beforeAll(async () => {
// })

describe(`UA Parser ${global['jest-playwright'].displayName}`, () => {
  it("ブラウザUA確認", async () => {
    reporter
      .description("ブラウザUA確認ですくりぷしょん")
      .feature("UA確認")
      .story("UA確認すとーりー")
      .addEnvironment('browser', global['jest-playwright'].displayName)
    await page.goto('https://faisalman.github.io/ua-parser-js/')
    await page.waitForTimeout(1000)
    const image = await page.screenshot({fullPage: true})
    reporter.addAttachment(`SS-UA-${global['jest-playwright'].displayName}`, image, "image/png")
  })
})
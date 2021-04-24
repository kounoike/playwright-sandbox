// beforeAll(async () => {
// })


describe(`Wikipedia ${browserName}`, () => {

  it("should display page", async () => {
    reporter
      .description("ですくりぷしょん")
      // .severity(Severity.Critical)
      .feature("なんかふぃーちゃー")
      .story("すとーりー")

    // console.log(browserName, browser)
    console.log(context)
    // console.log(expect.getState())
    await page.goto('https://www.wikipedia.org/')
    const image = await page.screenshot();
    reporter.addAttachment(`Screenshot-${browserName}`, image, "image/png");
    // expect(image).toMatchImageSnapshot(); whatismybroserの場合は毎回変わるとこがあるのでNG
  })
})
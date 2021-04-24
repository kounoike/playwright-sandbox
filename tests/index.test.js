// beforeAll(async () => {
// })


describe(`Wikipedia ${browserName}`, () => {

  it("should display page", async () => {
    reporter
      .description("ですくりぷしょん")
      // .severity(Severity.Critical)
      .feature("なんかふぃーちゃー")
      .story("すとーりー")

    await page.goto('https://www.wikipedia.org/')
    const image = await page.screenshot();
    reporter.addAttachment("Screenshot", image, "image/png");
    // expect(image).toMatchImageSnapshot(); whatismybroserの場合は毎回変わるとこがあるのでNG
  })
})
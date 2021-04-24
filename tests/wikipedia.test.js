// beforeAll(async () => {
// })

describe(`Wikipedia ${global['jest-playwright'].displayName}`, () => {

  it("should display page", async () => {
    reporter
      .description("Wikipediaですくりぷしょん")
      // .severity(Severity.Critical)
      .feature("Wikipediaふぃーちゃー")
      .story("Wikipediaすとーりー")
      .addEnvironment('browser', global['jest-playwright'].displayName)

    await page.goto('https://www.wikipedia.org/')

    reporter.startStep("titleチェック")
    const title = await page.title()
    expect(title).toBe('Wikipedia')
    reporter.endStep()

    reporter.startStep('スクリーンショット')
      const image = await page.screenshot();
      reporter.addAttachment(`SS-Wikipedia-${global['jest-playwright'].displayName}`, image, "image/png");
    // expect(image).toMatchImageSnapshot(); whatismybroserの場合は毎回変わるとこがあるのでNG
    reporter.endStep()
  })
})
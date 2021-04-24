beforeAll(async () => {
    await page.goto('https://whatismybrowser.com/')
  })
  
  test('should display correct browser', async () => {
    const browser = await page.$eval('.string-major', (el) => el.innerHTML)
    // fail either test!
    expect(browser).toContain('Chrome')
    // expect(browser).toContain('Firefox') 
    const image = await page.screenshot();
    reporter.addAttachment("Screenshot", image, "image/png");
    // expect(image).toMatchImageSnapshot(); whatismybroserの場合は毎回変わるとこがあるのでNG
  })
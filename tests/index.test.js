beforeAll(async () => {
    await page.goto('https://whatismybrowser.com/')
  })
  
  test('should display correct browser', async () => {
    await page.screenshot({ path: `example-${browserName}.png` });
    const browser = await page.$eval('.string-major', (el) => el.innerHTML)
    // fail either test!
    expect(browser).toContain('Chrome')
    // expect(browser).toContain('Firefox') 
  })
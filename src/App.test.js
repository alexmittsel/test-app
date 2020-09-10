const puppeteer = require('puppeteer');

const search = {
  request: 'BNB',
};

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  };
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
};

describe('on page load', () => {
  test('Market title loads correctly', async () => {
    let browser = await puppeteer.launch({});
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: '',
    });

    await page.goto('http://localhost:3000/');
    const html = await page.$eval('.sc-kEqYlL', (e) => e.innerHTML);
    expect(html).toBe('Market');
    browser.close();
  });
  test('BNB/BTC shows corrctly Fuse search works correctly', async () => {
    let browser = await puppeteer.launch(isDebugging());
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: '',
    });

    await page.goto('http://localhost:3000/');

    await page.click('.sc-iemXMA');
    await page.type('.sc-iemXMA', search.request);

    const listItems = await page.$$('.sc-jSFkmK');

    expect(listItems.length).toBe(1);

    browser.close();
  }, 160000);
});

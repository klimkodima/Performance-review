import puppeteer from 'puppeteer';

import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

describe('StatisticsCircle', () => {
  it('Matches image snapshot', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.waitFor(500);
    await page.goto('http://localhost:3000');
    await page.setViewport({
      width: 1366,
      height: 768,
      deviceScaleFactor: 1
    });
    const element = await page.$('.statistic-circle');
    const image = await element?.screenshot();

    expect(image).toMatchImageSnapshot({ allowSizeMismatch: true });
    await browser.close();
  }, 30000);
});

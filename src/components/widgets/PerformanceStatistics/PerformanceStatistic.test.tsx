import { render } from '@testing-library/react';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';
import PerformanceStatisticContainer from './PerformanceStatisticContainer';

expect.extend({ toMatchImageSnapshot });

describe('Render PerformanceStatistic Component', () => {
  it('Expect PerformanceStatistic to be in the document', () => {
    const { container } = render(<PerformanceStatisticContainer />);

    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('performance-statistics');
  });

  it('Matches image snapshot PerformanceStatistic', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.waitFor(500);
    await page.goto('http://localhost:3000');
    await page.setViewport({
      width: 1366,
      height: 768,
      deviceScaleFactor: 1
    });
    const element = await page.$('.performance-statistics');
    const image = await element?.screenshot();

    expect(image).toMatchImageSnapshot({ allowSizeMismatch: true });
    await browser.close();
  }, 30000);
});

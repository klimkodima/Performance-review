import { render, screen } from '@testing-library/react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';

import { statisticCircleData } from './TeamActivitiesPercentageContainer';
import TeamActivitiesPercentage from './TeamActivitiesPercentage';

expect.extend({ toMatchImageSnapshot });

describe('TeamActivitiesPercentage', () => {
  test('Expect widget to be in the document', () => {
    const { container } = render(
      <TeamActivitiesPercentage
        title='Hello'
        circleData={statisticCircleData}
      />
    );

    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('team-activities-percentage');
  });

  test('Matches image snapshot', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.waitFor(500);
    await page.goto('http://localhost:3000');
    await page.setViewport({
      width: 1366,
      height: 768,
      deviceScaleFactor: 1
    });
    const element = await page.$('.team-activities-percentage');
    const image = await element?.screenshot();

    expect(image).toMatchImageSnapshot({ allowSizeMismatch: true });
    await browser.close();
  }, 30000);

  test('renders correct title', () => {
    render(
      <TeamActivitiesPercentage
        title='Hello'
        circleData={statisticCircleData}
      />
    );
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });
});

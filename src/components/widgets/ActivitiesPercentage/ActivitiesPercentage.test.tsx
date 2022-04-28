import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { render, screen } from '@testing-library/react';
import puppeteer from 'puppeteer';

import { Card } from './Card';
import { activities, totalTime } from './ActivitiesPercentageContainer';

import { IActivity, ICardActivity } from './types';

const zeroAudits: IActivity = { value: 0, name: 'Audits' };
const zeroMeetings: IActivity = { value: 0, name: 'Meetings' };
const zeroOthers: IActivity = { value: 0, name: 'Others' };
const zeroSupport: IActivity = { value: 0, name: 'Support' };
const zeroAct = [zeroAudits, zeroMeetings, zeroOthers, zeroSupport];

const zeroCardData: ICardActivity = {
  activities: zeroAct
    .filter((act) => act.value !== 0)
    .sort((a: IActivity, b: IActivity) => b.value - a.value),
  totalTime: 0
};

const cardData: ICardActivity = {
  activities: activities
    .filter((act) => act.value !== 0)
    .sort((a: IActivity, b: IActivity) => b.value - a.value),
  totalTime: totalTime
};

expect.extend({ toMatchImageSnapshot });

describe('Card  Component', () => {
  describe('Matches snapshots', () => {
    it('Matches not zero snapshot', () => {
      const card = renderer.create(<Card cardData={cardData} />).toJSON();
      expect(card).toMatchSnapshot();
    });
    it('Matches zero snapshot', () => {
      const card = renderer.create(<Card cardData={zeroCardData} />).toJSON();
      expect(card).toMatchSnapshot();
    });
  });
  describe('Matches total label and value', () => {
    it('Matches total value', () => {
      render(<Card cardData={cardData} />);
      expect(screen.getByTestId('totalTime')).toHaveTextContent(
        String(totalTime)
      );
    });
    it('Matches total label', () => {
      render(<Card cardData={cardData} />);
      expect(screen.getByTestId('totalTimeLabel')).toHaveTextContent(
        'Total time:'
      );
    });
  });
  describe('Matches activity labels and values', () => {
    it('Matches activity labels', () => {
      const { container } = render(<Card cardData={cardData} />);
      expect(container.getElementsByClassName('card-label')).toHaveLength(
        activities.length
      );
    });
    it('Matches activity values', () => {
      const { container } = render(<Card cardData={cardData} />);
      expect(container.getElementsByClassName('card-value')).toHaveLength(
        activities.length
      );
    });
  });
  describe('Matches zero activity labels and values', () => {
    it('Matches zero activity labels', () => {
      const { container } = render(<Card cardData={zeroCardData} />);
      expect(container.getElementsByClassName('card-label')).toHaveLength(1);
    });
    it('Matches zero activity values', () => {
      const { container } = render(<Card cardData={zeroCardData} />);
      expect(container.getElementsByClassName('card-value')).toHaveLength(1);
    });
  });
  describe('Matches sorted activities', () => {
    it('Matches max activity', () => {
      const { container } = render(<Card cardData={cardData} />);
      expect(container.getElementsByClassName('card-value')).toHaveLength(4);
      expect(
        container.getElementsByClassName('card-value')[1]
      ).toHaveTextContent(String(activities[0].value) + 'h');
    });
    it('Matches min actievity', () => {
      const { container } = render(<Card cardData={cardData} />);
      expect(container.getElementsByClassName('card-value')).toHaveLength(4);
      expect(
        container.getElementsByClassName('card-value')[3]
      ).toHaveTextContent(String(activities[2].value) + 'h');
    });
  });
});
describe('Pie React-Redux Component', () => {
  it('Matches canvas snapshot', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.waitFor(500);
    await page.goto('http://localhost:3000');
    await page.setViewport({
      width: 1366,
      height: 768,
      deviceScaleFactor: 1
    });
    const element = await page.$('.pie-chart');
    const image = await element?.screenshot();
    expect(image).toMatchImageSnapshot({ allowSizeMismatch: true });
    await browser.close();
  }, 30000);
});

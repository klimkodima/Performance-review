import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DateFilterContainer from './DateFilterContainer';

describe('DateFilter Component', () => {
  describe('Matches DateFilterContainer snapshots', () => {
    it('Matches snapshot', () => {
      const dateFilter = renderer.create(<DateFilterContainer />).toJSON();
      expect(dateFilter).toMatchSnapshot();
    });
  });
  describe('Matches DateFilterComponent snapshots', () => {
    it('Matches DateFilterComponent click snapshot', () => {
      const { container } = render(<DateFilterContainer />);
      const dateFilter = container.getElementsByClassName('rmdp-input')[0];
      userEvent.click(dateFilter);
      const datePicker = container.getElementsByClassName('rmdp-wrapper')[0];
      expect(datePicker).toMatchSnapshot();
    });
    it('Matches DateFilterComponent click snapshot', () => {
      const { container } = render(<DateFilterContainer />);
      const dateFilter = container.getElementsByClassName('rmdp-input')[0];
      userEvent.click(dateFilter);
      const button = container.getElementsByClassName('button')[0];
      userEvent.click(button);
      const datePicker = container.getElementsByClassName('rmdp-wrapper')[0];
      expect(datePicker).toMatchSnapshot();
    });
    it('Matches DateFilterComponent click snapshot', () => {
      const { container } = render(<DateFilterContainer />);
      const dateFilter = container.getElementsByClassName('rmdp-input')[0];
      userEvent.click(dateFilter);
      const button = container.getElementsByClassName('button')[1];
      userEvent.click(button);
      const datePicker = container.getElementsByClassName('rmdp-wrapper')[0];
      expect(datePicker).toMatchSnapshot();
    });
    it('Matches DateFilterComponent click snapshot', () => {
      const { container } = render(<DateFilterContainer />);
      const dateFilter = container.getElementsByClassName('rmdp-input')[0];
      userEvent.click(dateFilter);
      const button = container.getElementsByClassName('button')[2];
      userEvent.click(button);
      const datePicker = container.getElementsByClassName('rmdp-wrapper')[0];
      expect(datePicker).toMatchSnapshot();
    });
  });
});

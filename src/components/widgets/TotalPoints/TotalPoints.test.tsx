import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import TotalPoints from './TotalPoints';
import { TTotalPoints } from './types';

const data1: TTotalPoints = {
  totalPoints: 826,
  level: 1,
  premium: 10
};
const data2: TTotalPoints = {
  totalPoints: 826,
  level: 2,
  premium: 10
};
const data3: TTotalPoints = {
  totalPoints: 826,
  level: 3,
  premium: 10
};
const data4: TTotalPoints = {
  totalPoints: 826,
  level: 4,
  premium: 10
};

describe('TotalPoints widget tests', () => {
  it('TotalPoints widget snapshot', () => {
    const component = renderer.create(<TotalPoints data={data1} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('TotalPoints widget snapshot', () => {
    const component = renderer.create(<TotalPoints data={data2} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('TotalPoints widget snapshot', () => {
    const component = renderer.create(<TotalPoints data={data3} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('TotalPoints widget snapshot', () => {
    const component = renderer.create(<TotalPoints data={data4} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('TotalPoints widgets component rendered', () => {
    render(<TotalPoints data={data1} />);
    const container = screen.getByTestId('total-container');
    expect(container).toBeInTheDocument();
  });
  it('TotalPoints widgets component has 3 items', () => {
    const { container } = render(<TotalPoints data={data1} />);
    expect(
      container.getElementsByClassName('total-points-item-wrapper')
    ).toHaveLength(3);
  });
});

import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import TotalPoints from './TotalPoints';

describe('TotalPoints widget container tests', () => {
  it('TotalPoints widget snapshot', () => {
    const component = renderer.create(<TotalPoints />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('TotalPoints widgets component rendered', () => {
    render(<TotalPoints />);
    const container = screen.getByTestId('total-container');
    expect(container).toBeInTheDocument();
  });
  it('TotalPoints widgets component has 3 items', () => {
    const { container } = render(<TotalPoints />);
    expect(
      container.getElementsByClassName('total-points-item-wrapper')
    ).toHaveLength(3);
  });
});

describe('TotalPoints widget item tests', () => {
  xit('TotalPoints widgets item rendered', () => {
    render(<TotalPoints />);
    const item = screen.getAllByTestId('criteria-item');
    expect(item[0]).toBeInTheDocument();
  });
  xit('TotalPoints widgets item has classes', () => {
    render(<TotalPoints />);
    const item = screen.getAllByTestId('criteria-item');
    expect(item[1]).toHaveClass('criteria-item');
  });
});

describe('Criteria widget item title tests', () => {
  xit('Criteria widgets item title rendered', () => {
    render(<TotalPoints />);
    const itemTitle = screen.getAllByTestId('criteria-item-title');
    expect(itemTitle[1]).toBeInTheDocument();
  });
  xit('Criteria widgets item title has classes', () => {
    render(<TotalPoints />);
    const itemTitle = screen.getAllByTestId('criteria-item-title');
    expect(itemTitle[1]).toHaveClass('criteria-item-title');
  });
  xit('Criteria widgets item title has text', () => {
    render(<TotalPoints />);
    const itemTitle = screen.getAllByTestId('criteria-item-title');
    expect(itemTitle[1]).toContainHTML('Support/Audits Hours');
  });
});

describe('Criteria widget item statistics tests', () => {
  xit('Criteria widgets item statistic rendered', () => {
    render(<TotalPoints />);
    const itemStatistics = screen.getAllByTestId('criteria-item-statistic');
    expect(itemStatistics[1]).toBeInTheDocument();
  });
  xit('Criteria widgets item statistics has classes', () => {
    render(<TotalPoints />);
    const itemStatistics = screen.getAllByTestId('criteria-item-statistic');
    expect(itemStatistics[1]).toHaveClass('criteria-item-statistic');
  });
  xit('Criteria widgets item statistics has text', () => {
    render(<TotalPoints />);
    const itemStatistics = screen.getAllByTestId('criteria-item-statistic');
    expect(itemStatistics[1]).toContainHTML('162');
  });
});

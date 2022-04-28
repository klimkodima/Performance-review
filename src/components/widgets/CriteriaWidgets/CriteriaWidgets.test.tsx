import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import CriteriaWidgets from './CriteriaWidgets';

describe('Criteria widget container tests', () => {
  test('Criteria widget snapshot', () => {
    const component = renderer.create(<CriteriaWidgets />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('Criteria widgets component rendered', () => {
    render(<CriteriaWidgets />);
    const container = screen.getByTestId('criteria-container');
    expect(container).toBeInTheDocument();
  });
  test('Criteria widgets component has classes', () => {
    render(<CriteriaWidgets />);
    const container = screen.getByTestId('criteria-container');
    expect(container).toHaveClass('criteria-container');
  });
  test('Criteria widgets component has 4 items', () => {
    render(<CriteriaWidgets />);
    const criteriaItems = screen.getAllByTestId('criteria-item');
    expect(criteriaItems.length).toBe(4);
  });
});

describe('Criteria widget item tests', () => {
  test('Criteria widgets item rendered', () => {
    render(<CriteriaWidgets />);
    const item = screen.getAllByTestId('criteria-item');
    expect(item[0]).toBeInTheDocument();
  });
  test('Criteria widgets item has classes', () => {
    render(<CriteriaWidgets />);
    const item = screen.getAllByTestId('criteria-item');
    expect(item[1]).toHaveClass('criteria-item');
  });
});

describe('Criteria widget item title tests', () => {
  test('Criteria widgets item title rendered', () => {
    render(<CriteriaWidgets />);
    const itemTitle = screen.getAllByTestId('criteria-item-title');
    expect(itemTitle[1]).toBeInTheDocument();
  });
  test('Criteria widgets item title has classes', () => {
    render(<CriteriaWidgets />);
    const itemTitle = screen.getAllByTestId('criteria-item-title');
    expect(itemTitle[1]).toHaveClass('criteria-item-title');
  });
  test('Criteria widgets item title has text', () => {
    render(<CriteriaWidgets />);
    const itemTitle = screen.getAllByTestId('criteria-item-title');
    expect(itemTitle[1]).toContainHTML('Support/Audits Hours');
  });
});

describe('Criteria widget item statistics tests', () => {
  test('Criteria widgets item statistic rendered', () => {
    render(<CriteriaWidgets />);
    const itemStatistics = screen.getAllByTestId('criteria-item-statistic');
    expect(itemStatistics[1]).toBeInTheDocument();
  });
  test('Criteria widgets item statistics has classes', () => {
    render(<CriteriaWidgets />);
    const itemStatistics = screen.getAllByTestId('criteria-item-statistic');
    expect(itemStatistics[1]).toHaveClass('criteria-item-statistic');
  });
  test('Criteria widgets item statistics has text', () => {
    render(<CriteriaWidgets />);
    const itemStatistics = screen.getAllByTestId('criteria-item-statistic');
    expect(itemStatistics[1]).toContainHTML('162');
  });
});

describe('Criteria widget item smile tests', () => {
  test('Criteria widgets item smile rendered', () => {
    render(<CriteriaWidgets />);
    const itemSmile = screen.getByTestId('criteria-item-smile');
    expect(itemSmile).toBeInTheDocument();
  });
  test('Criteria widgets item smile has classes', () => {
    render(<CriteriaWidgets />);
    const itemSmile = screen.getByTestId('criteria-item-smile');
    expect(itemSmile).toHaveClass('criteria-item-smile');
  });
  test('Criteria widgets item smile has tooltip', () => {
    render(<CriteriaWidgets />);
    const itemSmile = screen.getByTestId('criteria-item-smile');
    const itemTool = screen.getByTestId('criteria-item-tooltip');
    expect(itemSmile).toContainElement(itemTool);
  });
});

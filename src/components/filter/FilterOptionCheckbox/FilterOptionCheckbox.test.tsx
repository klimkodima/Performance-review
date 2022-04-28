import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import FilterOptionCheckbox from './FilterOptionCheckbox';

describe('FilterOptionCheckbox', () => {
  test('Matches snapshot', () => {
    const tree = renderer
      .create(<FilterOptionCheckbox name='Alpha' value={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Checkbox renders', () => {
    render(<FilterOptionCheckbox name='Alpha' value={true} />);
    expect(screen.getByTestId('filter-option-checkbox')).toBeInTheDocument();
  });

  test('shows label name', () => {
    render(<FilterOptionCheckbox name='Alpha' value={true} />);
    expect(screen.getByText(/Alpha/i)).toBeInTheDocument();
  });

  test('checkbox checked', () => {
    render(<FilterOptionCheckbox name='Alpha' value={true} />);
    expect(screen.getByTestId('CheckBoxIcon')).toBeInTheDocument();
  });

  test('checkbox unchecked', () => {
    render(<FilterOptionCheckbox name='Alpha' value={false} />);
    expect(screen.getByTestId('CheckBoxOutlineBlankIcon')).toBeInTheDocument();
  });
});

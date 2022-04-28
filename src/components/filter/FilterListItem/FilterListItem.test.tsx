import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import FilterListItem from './FilterListItem';

describe('FilterListItem', () => {
  test('Matches snapshot', () => {
    const tree = renderer.create(<FilterListItem name='Alpha' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correct name', () => {
    render(<FilterListItem name='Alpha' />);
    expect(screen.getByText(/Alpha/)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import FilterList from './FilterList';
import { FilterType } from '../types';

const mockTeamFilter: FilterType[] = [
  { name: 'Alpha', value: true },
  { name: 'Charlie', value: false },
  { name: 'X-Rays', value: false }
];

describe('FilterList', () => {
  test('filter name shows', () => {
    render(
      <FilterList
        title='TEAM'
        open={true}
        popUpId='2'
        onPopUpClose={() => true}
        anchorEl={null}
        filter={mockTeamFilter}
        onAddFilterClick={() => true}
      />
    );
    expect(screen.getByText(/TEAM/i)).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    render(
      <FilterList
        title='TEAM'
        open={true}
        popUpId='2'
        onPopUpClose={() => true}
        anchorEl={null}
        filter={mockTeamFilter}
        onAddFilterClick={() => true}
      />
    );
    expect(screen.getByTestId('filter-list-test')).toMatchSnapshot();
  });
});

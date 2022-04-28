import renderer from 'react-test-renderer';
import Filter from './Filter';
import { mockAuditorFilter, mockTeamFilter } from './FilterContainer';
import { FilterType } from '../types';

const mockLevelFilter: FilterType[] = [
  { name: 'Trainee', value: true },
  { name: 'Junior', value: true },
  { name: 'Middle', value: false },
  { name: 'Senior', value: false },
  { name: 'Team Lead', value: false }
];

describe('Filter', () => {
  test('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Filter
          teamFilter={mockTeamFilter}
          levelFilter={mockLevelFilter}
          auditorFilter={mockAuditorFilter}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AuditorsStatistics from './AuditorsStatistics';
import { TableRow } from './TableRow';

import { IAuditorStatistics } from './types';
import { data } from './data';

const maxRowValues: IAuditorStatistics = {
  id: 1,
  fullName: 'Elena Elenova',
  totalPoints: 845,
  averagePerformance: 9,
  averageValidity: 98,
  supportAuditsHours: 167,
  correspondentsHours: 93
};

const minRowValues: IAuditorStatistics = {
  id: 1,
  fullName: 'Elena Elenova',
  totalPoints: 609,
  averagePerformance: 1,
  averageValidity: 34,
  supportAuditsHours: 117,
  correspondentsHours: 68
};

const maxValues = {
  totalPoints: 845,
  averagePerformance: 9,
  averageValidity: 98,
  supportAuditsHours: 167,
  correspondentsHours: 93
};

const minValues = {
  totalPoints: 609,
  averagePerformance: 1,
  averageValidity: 34,
  supportAuditsHours: 117,
  correspondentsHours: 68
};

describe('AuditorsStatistics React-Redux Component', () => {
  it('Matches snapshot', () => {
    const tree = renderer.create(<AuditorsStatistics data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('AuditorsStatistics widget item title tests', () => {
  it('Widget title has text', () => {
    const { container } = render(<AuditorsStatistics data={data} />);
    expect(
      container.getElementsByClassName('table-title')[0]
    ).toHaveTextContent('Auditors Statistics');
  });
});

describe('AuditorsStatistics widget table  tests', () => {
  it('Matches  sort item snapshot', () => {
    const { container } = render(<AuditorsStatistics data={data} />);
    const sortButton = container.getElementsByClassName('sort-arrow')[0];
    userEvent.click(sortButton);
    expect(container).toMatchSnapshot();
    userEvent.click(sortButton);
    expect(container).toMatchSnapshot();
  });

  it('Matches cell click', () => {
    const { container } = render(<AuditorsStatistics data={data} />);
    const cell = container.getElementsByClassName('audit-stat-table-cell')[12];
    userEvent.click(cell);
    expect(container).toMatchSnapshot();
  });

  it('Matches table max  row data snapshot', () => {
    const maxTree = renderer
      .create(
        <TableRow
          auditor={maxRowValues}
          handleClick={() => true}
          maxColValues={maxValues}
          minColValues={minValues}
        />
      )
      .toJSON();
    expect(maxTree).toMatchSnapshot();
  });

  it('Matches table min  row data snapshot', () => {
    const minTree = renderer
      .create(
        <TableRow
          auditor={minRowValues}
          handleClick={() => true}
          maxColValues={maxValues}
          minColValues={minValues}
        />
      )
      .toJSON();
    expect(minTree).toMatchSnapshot();
  });

  it('Matches table min  row data cells classes', () => {
    const { container } = render(
      <TableRow
        auditor={minRowValues}
        handleClick={() => true}
        maxColValues={maxValues}
        minColValues={minValues}
      />
    );
    const maxCells = container.getElementsByClassName('max-value-color');
    const minCells = container.getElementsByClassName('min-value-color');
    expect(maxCells).toHaveLength(0);
    expect(minCells).toHaveLength(5);
  });

  it('Matches table max  row data cells classes', () => {
    const { container } = render(
      <TableRow
        auditor={maxRowValues}
        handleClick={() => true}
        maxColValues={maxValues}
        minColValues={minValues}
      />
    );
    const maxCells = container.getElementsByClassName('max-value-color');
    const minCells = container.getElementsByClassName('min-value-color');
    expect(maxCells).toHaveLength(5);
    expect(minCells).toHaveLength(0);
  });

  it('Matches table  cells ', () => {
    const { container } = render(<AuditorsStatistics data={data} />);
    const cells = container.getElementsByClassName('audit-stat-table-cell');
    expect(cells).toHaveLength(data.length * 6);
  });
});

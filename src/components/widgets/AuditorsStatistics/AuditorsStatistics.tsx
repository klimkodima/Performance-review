import { ReactElement, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

import { IAuditorStatistics, ORDER } from './types';

import './AuditorsStatistics.scss';

const AUDITOR_STAT_TITLE_TEXT = 'Auditors Statistics';

const INIT_MAX_COL_VALUES = {
  totalPoints: 0,
  averagePerformance: 0,
  averageValidity: 0,
  supportAuditsHours: 0,
  correspondentsHours: 0
};

const INIT_MIN_COL_VALUES = {
  totalPoints: +Infinity,
  averagePerformance: +Infinity,
  averageValidity: +Infinity,
  supportAuditsHours: +Infinity,
  correspondentsHours: +Infinity
};

const sortData = (data: IAuditorStatistics[], order: ORDER) =>
  data.sort((a: IAuditorStatistics, b: IAuditorStatistics) =>
    order === ORDER.Asc
      ? b.totalPoints - a.totalPoints
      : a.totalPoints - b.totalPoints
  );

type dataApi = {
  data: IAuditorStatistics[];
};

const AuditorsStatisticsComponent = ({ data }: dataApi): ReactElement => {
  const [order, setOrder] = useState<ORDER>(ORDER.Asc);
  const [maxColValues, setMaxColValues] = useState(INIT_MAX_COL_VALUES);
  const [minColValues, setMinColValues] = useState(INIT_MIN_COL_VALUES);

  const handleCellClick = (id: number) => {
    console.log(id);
    //go to auditor view
  };

  const handleRequestSort = () => {
    setOrder(order === ORDER.Asc ? ORDER.Desc : ORDER.Asc);
  };

  const setMinMaxValues = (): void => {
    const tempMinValues = { ...minColValues };
    const tempMaxValues = { ...maxColValues };
    for (const row of data) {
      for (const key of Object.keys(row)) {
        if (row[key] > tempMaxValues[key]) {
          tempMaxValues[key] = row[key];
        }
        if (row[key] < tempMinValues[key]) {
          tempMinValues[key] = row[key];
        }
      }
    }
    setMaxColValues(tempMaxValues);
    setMinColValues(tempMinValues);
  };
  useEffect(() => {
    setMinMaxValues();
  }, []);

  return (
    <Paper className='audit-stats-container'>
      <h2 className='table-title'>{AUDITOR_STAT_TITLE_TEXT}</h2>
      <TableContainer sx={{ maxHeight: 450 }}>
        <Table
          stickyHeader
          sx={{ minWidth: 650 }}
          aria-label={AUDITOR_STAT_TITLE_TEXT}
        >
          <TableHead createSortHandler={handleRequestSort} order={order} />
          <TableBody>
            {sortData(data, order).map((auditor: IAuditorStatistics) => (
              <TableRow
                key={auditor.id}
                auditor={auditor}
                handleClick={handleCellClick}
                minColValues={minColValues}
                maxColValues={maxColValues}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AuditorsStatisticsComponent;

import { ReactElement } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { ITableLabel, ORDER } from '../types';

const AUDITOR_NAME_TEXT = 'Auditor';
const TOTAL_POINTS_TEXT = 'Total points';
const AVERAGE_PERFOMANCE_TEXT = 'Average performance';
const AVERAGE_VALIDITY_TEXT = 'Average validity';
const SUPPORT_AUDITS_TEXT = 'Support/Audits hours';
const CORRESPONDENCE_HOURS_TEXT = 'Hours correspondence';

const labels: ITableLabel[] = [
  { text: AUDITOR_NAME_TEXT },
  { text: TOTAL_POINTS_TEXT, sorted: true },
  { text: AVERAGE_PERFOMANCE_TEXT },
  { text: AVERAGE_VALIDITY_TEXT },
  { text: SUPPORT_AUDITS_TEXT },
  { text: CORRESPONDENCE_HOURS_TEXT }
];

type TableHeadProps = {
  createSortHandler: () => void;
  order: string;
};

const TableHeadContainer = ({
  createSortHandler,
  order
}: TableHeadProps): ReactElement => (
  <TableHead>
    <TableRow>
      {labels.map((label: ITableLabel) => (
        <TableCell
          key={label.text}
          className='audit-stat-table-head-cell'
          align='center'
          sx={{ fontWeight: '400' }}
          padding='normal'
        >
          <span>{label.text.toUpperCase()}</span>
          {label.sorted &&
            (order === ORDER.Desc ? (
              <ArrowDropDownIcon
                className='sort-arrow'
                onClick={createSortHandler}
              />
            ) : (
              <ArrowDropUpIcon
                className='sort-arrow'
                onClick={createSortHandler}
              />
            ))}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default TableHeadContainer;

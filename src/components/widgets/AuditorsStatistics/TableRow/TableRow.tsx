import { ReactElement, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { IAuditorStatistics, INumberColValues } from '../types';

type AuditsStatProps = {
  auditor: IAuditorStatistics;
  maxColValues: INumberColValues;
  minColValues: INumberColValues;
  handleClick: (id: number) => void;
};

const Row = ({
  auditor,
  handleClick,
  maxColValues,
  minColValues
}: AuditsStatProps): ReactElement => {
  const {
    id,
    fullName,
    totalPoints,
    averagePerformance,
    averageValidity,
    correspondentsHours,
    supportAuditsHours
  } = auditor;

  const [isSelected, setIsSelected] = useState(false);

  const handleRowClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TableRow hover onClick={handleRowClick} selected={isSelected}>
      <TableCell
        align='center'
        padding='normal'
        className='auditor-cell audit-stat-table-cell'
        onClick={() => {
          handleClick(id);
        }}
      >
        {fullName}
      </TableCell>
      <TableCell
        className={`${
          totalPoints === maxColValues.totalPoints ? 'max-value-color' : ''
        }
          ${totalPoints === minColValues.totalPoints ? 'min-value-color' : ''}
          audit-stat-table-cell`}
        align='center'
        padding='normal'
      >
        {totalPoints}
      </TableCell>
      <TableCell
        align='center'
        padding='normal'
        className={`${
          averagePerformance === maxColValues.averagePerformance
            ? 'max-value-color'
            : ''
        }
          ${
            averagePerformance === minColValues.averagePerformance
              ? 'min-value-color'
              : ''
          }
          audit-stat-table-cell`}
      >
        {averagePerformance === 1
          ? `${averagePerformance} task/h`
          : `${averagePerformance} tasks/h`}
      </TableCell>
      <TableCell
        align='center'
        padding='normal'
        className={`${
          averageValidity === maxColValues.averageValidity
            ? 'max-value-color'
            : ''
        }
          ${
            averageValidity === minColValues.averageValidity
              ? 'min-value-color'
              : ''
          }
          audit-stat-table-cell`}
      >
        {`${averageValidity}%`}
      </TableCell>
      <TableCell
        align='center'
        padding='normal'
        className={`${
          supportAuditsHours === maxColValues.supportAuditsHours
            ? 'max-value-color'
            : ''
        }
          ${
            supportAuditsHours === minColValues.supportAuditsHours
              ? 'min-value-color'
              : ''
          }
          audit-stat-table-cell`}
      >
        {`${supportAuditsHours}h`}
      </TableCell>
      <TableCell
        align='center'
        padding='normal'
        className={`${
          correspondentsHours === maxColValues.correspondentsHours
            ? 'max-value-color'
            : ''
        }
          ${
            correspondentsHours === minColValues.correspondentsHours
              ? 'min-value-color'
              : ''
          }
          audit-stat-table-cell`}
      >
        {`${correspondentsHours}%`}
      </TableCell>
    </TableRow>
  );
};

export default Row;

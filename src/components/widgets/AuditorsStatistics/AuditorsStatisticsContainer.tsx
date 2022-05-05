import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectAuditorsStatistics } from '../../../store/Auditors';
import AuditorsStatistics from './AuditorsStatistics';
import { IAuditorStatistics } from './types';
import './AuditorsStatistics.scss';

const AuditorsStatisticsContainer: FC = () => {
  const auditorsStatistics: IAuditorStatistics[] = useSelector(
    selectAuditorsStatistics
  );
  const data = [...auditorsStatistics];

  return <AuditorsStatistics data={data} />;
};

export default AuditorsStatisticsContainer;

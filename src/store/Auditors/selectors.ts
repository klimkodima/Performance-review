import { RootStateType } from '../index';
import { IAuditorStatistics } from '../../components/widgets/AuditorsStatistics/types';

export const selectAuditorsStatistics = (
  state: RootStateType
): IAuditorStatistics[] => state.auditors.auditorsStatistics;

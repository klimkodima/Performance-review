export enum ROLE {
  TeamLead = 'TEAM_LEAD',
  Auditor = 'AUDITOR',
  Manager = 'MANAGER'
}

export enum ORDER {
  Asc = 'ASC',
  Desc = 'DESC'
}

export interface ITableLabel {
  text: string;
  sorted?: boolean;
}

export interface INumberColValues {
  totalPoints: number;
  averagePerformance: number;
  averageValidity: number;
  supportAuditsHours: number;
  correspondentsHours: number;
}

export interface IAuditorStatistics extends INumberColValues {
  id: number;
  fullName: string;
}

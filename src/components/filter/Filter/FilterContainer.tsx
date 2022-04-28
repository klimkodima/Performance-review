import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Filter from './Filter';
import { FilterType } from '../types';

export const mockTeamFilter: FilterType[] = [
  { name: 'Alpha', value: true },
  { name: 'Charlie', value: false },
  { name: 'X-Rays', value: false }
];

export const mockAuditorFilter: FilterType[] = [
  { name: 'Alex Vagner', value: true },
  { name: 'Tom Cruise', value: true }
];

const FilterContainer = (): ReactElement => {
  const { t } = useTranslation('filter');
  const mockLevelFilter: FilterType[] = [
    { name: t('Trainee'), value: true },
    { name: t('Junior'), value: true },
    { name: t('Middle'), value: false },
    { name: t('Senior'), value: false },
    { name: t('Team Lead'), value: false }
  ];
  return (
    <Filter
      teamFilter={mockTeamFilter}
      levelFilter={mockLevelFilter}
      auditorFilter={mockAuditorFilter}
    />
  );
};

export default FilterContainer;

import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

import TeamActivitiesPercentage from './TeamActivitiesPercentage';
import { filterTeams } from './helper';

import { StatisticCircleDataType } from './types';

const filter = ['Charlie', 'Alpha'];

export const statisticCircleData: StatisticCircleDataType[] = [
  {
    title: 'X-Rays',
    data: [
      { value: 99, name: 'Audits' },
      { value: 18, name: 'Meetings' },
      { value: 63, name: 'Others' },
      { value: 3, name: 'Support' }
    ]
  },
  {
    title: 'Charlie',
    data: [
      { value: 99, name: 'Audits' },
      { value: 18, name: 'Meetings' },
      { value: 63, name: 'Others' },
      { value: 0, name: 'Support' }
    ]
  },
  {
    title: 'Alpha',
    data: [
      { value: 99, name: 'Audits' },
      { value: 18, name: 'Meetings' },
      { value: 63, name: 'Others' },
      { value: 3, name: 'Support' }
    ]
  }
];

const filteredData = filterTeams(statisticCircleData, filter);

const TeamActivitiesPercentageContainer = (): ReactElement => {
  const { t } = useTranslation('common', {
    keyPrefix: 'teamActivitiesPercentage'
  });
  return (
    <Grid item xs={12} md={12} lg={12}>
      <TeamActivitiesPercentage title={t('Title')} circleData={filteredData} />
    </Grid>
  );
};

export default TeamActivitiesPercentageContainer;

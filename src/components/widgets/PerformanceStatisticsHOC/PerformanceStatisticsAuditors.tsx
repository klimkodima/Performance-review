import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import { PerformanceStatisticContainer } from '..';
import './PerformanceStatisticsTeamLead.scss';

const PerformanceStatisticsAuditors: FC = () => {
  const { t } = useTranslation('common', {
    keyPrefix: 'performanceStatistics'
  });
  return (
    <Grid item xs={12} md={12} lg={12}>
      <div className='widgets-wrapper widget-perf-stat-audit'>
        <h2>{t('Performance Statistics')}</h2>
        <PerformanceStatisticContainer />
      </div>
    </Grid>
  );
};

export default PerformanceStatisticsAuditors;

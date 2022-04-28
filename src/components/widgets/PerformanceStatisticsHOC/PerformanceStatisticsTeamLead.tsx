import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import { PerformanceStatisticContainer } from '..';
import './PerformanceStatisticsTeamLead.scss';

const PerformanceStatisticsTeamLead: FC = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const { t } = useTranslation('common', {
    keyPrefix: 'performanceStatistics'
  });

  return (
    <Grid item xs={12} md={12} lg={12}>
      <div className='widgets-wrapper'>
        <h2>{t('Performance Statistics')}</h2>
        <div className='average-levels-box'>
          <p>{t('Average levels')}</p>
          <div className='switch-wrapper'>
            <p>{t('On')}</p>
            <label>
              <input type='checkbox' onChange={() => setIsCheck(!isCheck)} />
              <span className='switch' />
            </label>
            <p>{t('Off')}</p>
          </div>
        </div>
        <PerformanceStatisticContainer isShowAverage={isCheck} />
      </div>
    </Grid>
  );
};

export default PerformanceStatisticsTeamLead;

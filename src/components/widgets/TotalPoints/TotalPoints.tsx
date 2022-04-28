import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

import { TTotalPoints } from './types';

import './TotalPoints.scss';

const TotalPoints: FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'totalPoints' });
  const data: TTotalPoints = {
    totalPoints: 826,
    level: 2,
    premium: 10
  };
  const formatLevel = (level: number): string => {
    switch (level) {
      case 1:
        return `${level}st`;
      case 2:
        return `${level}nd`;
      case 3:
        return `${level}rd`;
      default:
        return `${level}th`;
    }
  };

  return (
    <Grid item xs={4} data-testid='total-container'>
      <div className='total-points-container'>
        <div className='total-points-item-wrapper'>
          <span className='total-points-label'>{t('Total Points')}</span>
          <span className='total-points-value'>{data.totalPoints}</span>
        </div>
        <div className='total-points-item-wrapper'>
          <span className='total-points-label'>{t('Level position')}</span>
          <span className='total-points-value'>{formatLevel(data.level)}</span>
        </div>
        <div className='total-points-item-wrapper'>
          <span className='total-points-label'>{t('Seniority Premium')}</span>
          <span className='total-points-value'>
            {data.premium === 0 ? '-' : data.premium}%
          </span>
        </div>
      </div>
    </Grid>
  );
};

export default TotalPoints;

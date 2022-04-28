import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ICardActivity } from '../types';

type CardProps = {
  cardData: ICardActivity;
};

const CardView: FC<CardProps> = ({ cardData }) => {
  const { t } = useTranslation('common', { keyPrefix: 'activitiesPercentage' });

  return (
    <div className='card'>
      <div className='card-row'>
        <label data-testid='totalTimeLabel' className='card-label'>
          {t('Total time')}:
        </label>
        <span data-testid='totalTime' className='card-value'>
          {String(cardData.totalTime)}h
        </span>
      </div>
      {cardData.activities.map((activity) => (
        <div key={activity.name} className='card-row'>
          <label className='card-label'>{activity.name}:</label>
          <span className='card-value'>{activity.value}h</span>
        </div>
      ))}
    </div>
  );
};

export default CardView;

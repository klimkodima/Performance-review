import { ReactElement, memo } from 'react';

import { StatisticsCircle } from './StatisticsCircle';

import { StatisticCircleDataType } from './types';

import './TeamActivitiesPercentage.scss';

type TeamActivitiesPercentagePropsType = {
  title: string;
  circleData: StatisticCircleDataType[];
};

const TeamActivitiesPercentage = memo(
  ({ title, circleData }: TeamActivitiesPercentagePropsType): ReactElement => (
    <div className='team-activities-percentage'>
      <div>
        <h2 className='team-activities-percentage__title'>{title}</h2>
      </div>
      <div className='circles'>
        <div className='circles__wrapper'>
          {circleData.map(({ title, data }) => (
            <StatisticsCircle key={title} title={title} circleData={data} />
          ))}
        </div>
      </div>
    </div>
  )
);

export default TeamActivitiesPercentage;

TeamActivitiesPercentage.displayName = 'TeamActivitiesPercentage';

import { FC } from 'react';
import TotalPoints from './TotalPoints';
import { TTotalPoints } from './types';

const TotalPointsContainer: FC = () => {
  const data: TTotalPoints = {
    totalPoints: 826,
    level: 2,
    premium: 10
  };

  return <TotalPoints data={data} />;
};

export default TotalPointsContainer;

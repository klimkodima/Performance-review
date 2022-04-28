import { FC } from 'react';
import { Pie } from './Pie';
import { Card } from './Card';

import { IPieOption, ICardActivity } from './types';

import './ActivitiesPercentage.scss';

type Props = {
  pieData: IPieOption;
  cardData: ICardActivity;
};

const Activity: FC<Props> = ({ pieData, cardData }) => (
  <div className='section-activities-content'>
    <Pie pieData={pieData} />
    <Card cardData={cardData} />
  </div>
);

export default Activity;

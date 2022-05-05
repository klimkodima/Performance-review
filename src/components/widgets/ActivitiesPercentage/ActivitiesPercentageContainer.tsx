import { ReactElement } from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

import ActivitiesPercentage from './ActivitiesPercentage';

import { IActivity, ICardActivity, IPieOption } from './types';

const audits: IActivity = { value: 99, name: 'Audits' };
const meetings: IActivity = { value: 63, name: 'Meetings' };
const others: IActivity = { value: 0, name: 'Others' };
const support: IActivity = { value: 18, name: 'Support' };
export const PIE_TITLE_TEXT = 'Activities Percentage';
const colors = [
  '#F8D84F',
  '#94DC2E',
  '#9F00BB',
  '#67E0E3',
  '#ff9f7f',
  '#fb7293',
  '#E062AE',
  '#E690D1',
  '#e7bcf3',
  '#9d96f5',
  '#8378EA',
  '#96BFFF'
];

export const activities: IActivity[] = [audits, others, support, meetings];

export const totalTime: number = activities.reduce(
  (acc: number, a: IActivity) => {
    return acc + a.value;
  },
  0
);

const ActivitiesPercentageContainer = (): ReactElement | null => {
  const { t } = useTranslation('common', { keyPrefix: 'activitiesPercentage' });
  const pieData = activities
    .filter((act) => act.value !== 0)
    .map((activity: IActivity) => ({
      ...activity,
      value: Math.round((activity.value / totalTime) * 100)
    }));

  const cardData: ICardActivity = {
    totalTime: totalTime,
    activities: activities
      .filter((act) => act.value !== 0)
      .sort((a: IActivity, b: IActivity) => b.value - a.value)
  };

  const option: IPieOption = {
    title: {
      text: t('Title'),
      textStyle: {
        fontWeight: '700',
        fontSize: '2rem'
      },
      top: '40px'
    },
    animation: false,
    color: colors,
    labelLine: {
      color: 'black'
    },
    label: {
      show: true,
      color: 'black',
      fontWeight: 500,
      fontSize: '1.3rem',
      formatter: '{b}: {d}%'
    },
    series: [
      {
        name: PIE_TITLE_TEXT,
        type: 'pie',
        radius: '57%',
        data: pieData,
        labelLine: {
          lineStyle: {
            color: 'black'
          }
        },
        emphasis: {
          disabled: true
        },
        top: '10%'
      }
    ]
  };

  return (
    <Grid item xs={12} md={12} lg={12}>
      <ActivitiesPercentage pieData={option} cardData={cardData} />
    </Grid>
  );
};

export default ActivitiesPercentageContainer;

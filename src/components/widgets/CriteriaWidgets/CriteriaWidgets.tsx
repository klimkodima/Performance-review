import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import CriteriaItem from './CriteriaItem';
import { TDataList, TData } from './types';

import './CriteriaWidgets.scss';

const CriteriaWidgets: FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'criteria' });
  const data: TDataList = [
    {
      title: t('Average Performance'),
      statisticValue: 1,
      isCorrespondence: false
    },
    {
      title: t('Support/Audits Hours'),
      statisticValue: 162,
      isCorrespondence: false
    },
    {
      title: t('Average Validity'),
      statisticValue: 96,
      isCorrespondence: false
    },
    {
      title: t('Hours Correspondence'),
      statisticValue: 90,
      isCorrespondence: true
    }
  ];
  return (
    <Grid
      item
      xs={8}
      className='criteria-container'
      data-testid='criteria-container'
    >
      <Box className='criteria-items-wrapper'>
        {data.map((item: TData) => (
          <CriteriaItem key={item.title} data={item} />
        ))}
      </Box>
    </Grid>
  );
};

export default CriteriaWidgets;

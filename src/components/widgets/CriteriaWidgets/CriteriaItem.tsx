import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import CustomTooltip from './CustomTooltip';
import { TData } from './types';

const CriteriaItem: FC<{ data: TData }> = ({ data }) => {
  const { title, statisticValue, isCorrespondence } = data;
  const { t } = useTranslation('common', { keyPrefix: 'criteria' });

  const getValueType = (titleName: string, value: number): string => {
    if (titleName === t('Average Performance')) {
      return value === 1 ? ` ${t('task/h')}` : ` ${t('tasks/h')}`;
    } else if (titleName === t('Support/Audits Hours')) {
      return t('h');
    } else return '%';
  };

  const valueType = getValueType(title, statisticValue);

  return (
    <Grid item xs={6} data-testid='criteria-item' className='criteria-item'>
      <Box className='criteria-item-wrapper'>
        <span className='criteria-item-title' data-testid='criteria-item-title'>
          {title}
        </span>
        <span
          className='criteria-item-statistic'
          data-testid='criteria-item-statistic'
        >
          {statisticValue}
          {valueType}
        </span>
        {isCorrespondence && (
          <div
            className='criteria-item-smile'
            data-testid='criteria-item-smile'
          >
            <CustomTooltip
              percent={statisticValue}
              data-testid='criteria-item-tooltip'
            />
          </div>
        )}
      </Box>
    </Grid>
  );
};

export default CriteriaItem;

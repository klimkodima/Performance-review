import { ReactElement } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { setDatePeriod } from './helper';
import { ButtonsGroupTypes } from './types';
import { LAST_30_DAYS, LAST_90_DAYS, LAST_365_DAYS } from './constants';

const ButtonsGroupContainer = ({
  classes,
  setValue
}: ButtonsGroupTypes): ReactElement => (
  <ButtonGroup className={classes} data-testid='buttons-container'>
    <Button className='button' onClick={() => setDatePeriod(30, setValue)}>
      {LAST_30_DAYS}
    </Button>
    <Button className='button' onClick={() => setDatePeriod(90, setValue)}>
      {LAST_90_DAYS}
    </Button>
    <Button className='button' onClick={() => setDatePeriod(365, setValue)}>
      {LAST_365_DAYS}
    </Button>
  </ButtonGroup>
);

export default ButtonsGroupContainer;

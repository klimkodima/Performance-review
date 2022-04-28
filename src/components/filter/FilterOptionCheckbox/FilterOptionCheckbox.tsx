import { ReactElement } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormGroup } from '@mui/material';

import { FilterType } from '../types';

import './FilterOptionCheckbox.scss';

const FilterOptionCheckbox = ({ name, value }: FilterType): ReactElement => (
  <FormGroup className='filter-checkbox-wrapper'>
    <FormControlLabel
      control={
        <Checkbox
          data-testid='filter-option-checkbox'
          className='checkbox'
          checked={value}
        />
      }
      label={name}
    />
  </FormGroup>
);

export default FilterOptionCheckbox;

import { ReactElement } from 'react';
import TextField from '@mui/material/TextField';

import './FilterInput.scss';

const FilterInput = (): ReactElement => (
  <div className='filter-input'>
    <TextField className='text-field' fullWidth />
  </div>
);

export default FilterInput;

import { ReactElement, memo } from 'react';

import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';

import './FilterListItem.scss';

type FilterListItemPropsType = {
  name: string;
};

const FilterListItem = memo(
  ({ name }: FilterListItemPropsType): ReactElement => (
    <ListItem>
      <div className='filter-list-item'>
        <Typography className='filter-list-item__filter-name'>
          {name}
        </Typography>
        <IconButton className='filter-list-item__delete-button'>+</IconButton>
      </div>
    </ListItem>
  )
);

export default FilterListItem;

FilterListItem.displayName = 'FilterListItem';

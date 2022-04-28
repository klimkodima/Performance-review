import { ReactElement, MouseEvent, memo } from 'react';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';

import FilterInput from '../FilterInput/FilterInput';
import { FilterOptionCheckbox } from '../FilterOptionCheckbox';
import { FilterPopUp } from '../FilterPopUp';
import { FilterListItem } from '../FilterListItem';

import { FilterType } from '../types';

import './FilterList.scss';

type FilterListPropsType = {
  popUpId: string | undefined;
  title: string;
  open: boolean;
  filter: FilterType[];
  anchorEl: HTMLButtonElement | null;
  onPopUpClose: () => void;
  onAddFilterClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const FilterList = memo(
  ({
    title,
    filter,
    onAddFilterClick,
    onPopUpClose,
    popUpId,
    open,
    anchorEl
  }: FilterListPropsType): ReactElement => {
    const { t } = useTranslation('header');
    return (
      <div className='filter-list'>
        <List data-testid='filter-list-test'>
          <div className='filter-list__name'>
            <Typography className='title'>{title}</Typography>
            <IconButton className='plus-button' onClick={onAddFilterClick}>
              +
            </IconButton>
          </div>
          {filter.map(
            ({ name, value }) =>
              value && <FilterListItem name={name} key={name} />
          )}
          <FilterPopUp
            anchorEl={anchorEl}
            popUpId={popUpId}
            handleClose={onPopUpClose}
            open={open}
          >
            {title === t('AUDITOR') && <FilterInput />}
            {filter.map(({ name, value }) => (
              <FilterOptionCheckbox name={name} value={value} key={name} />
            ))}
          </FilterPopUp>
        </List>
      </div>
    );
  }
);

export default FilterList;

FilterList.displayName = 'FilterList';

import { ReactElement, useState, MouseEvent } from 'react';
import FilterList from './FilterList';
import { FilterType } from '../types';

type FilterListContainerPropsType = {
  title: string;
  filter: FilterType[];
};

const FilterListContainer = ({
  filter,
  title
}: FilterListContainerPropsType): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleAddFilterClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopUpClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popUpId = open ? 'simple-popover' : undefined;

  return (
    <FilterList
      title={title}
      filter={filter}
      popUpId={popUpId}
      onAddFilterClick={handleAddFilterClick}
      onPopUpClose={handlePopUpClose}
      open={open}
      anchorEl={anchorEl}
    />
  );
};

export default FilterListContainer;

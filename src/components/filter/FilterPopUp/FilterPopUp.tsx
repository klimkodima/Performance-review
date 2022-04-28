import { FC, ReactElement } from 'react';

import { Popover } from '@mui/material';

type FilterPopUpPropsType = {
  anchorEl: HTMLElement | null;
  popUpId: string | undefined;
  handleClose: () => void;
  open: boolean;
};

const FilterPopUp: FC<FilterPopUpPropsType> = ({
  children,
  anchorEl,
  popUpId,
  open,
  handleClose
}): ReactElement => (
  <Popover
    anchorReference='anchorPosition'
    anchorPosition={{ top: 61, left: 251 }}
    id={popUpId}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
  >
    {children}
  </Popover>
);

export default FilterPopUp;

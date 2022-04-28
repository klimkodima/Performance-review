import { ReactElement } from 'react';

import { RowType } from './types';

const ContentRow = ({
  classesContainer,
  classesLabel,
  classesText,
  label,
  text
}: RowType): ReactElement => {
  return (
    <div className={classesContainer} data-testid='container'>
      <span className={classesLabel} data-testid='label'>
        {label}:
      </span>
      <span className={classesText} data-testid='text'>
        {text}
      </span>
    </div>
  );
};

export default ContentRow;

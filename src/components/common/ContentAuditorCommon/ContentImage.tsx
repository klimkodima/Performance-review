import { ReactElement, memo } from 'react';

import { ImageType } from './types';

const ContentImage = memo(
  ({ classes, src, alt }: ImageType): ReactElement => (
    <div className={classes} data-testid='image-block'>
      <img src={src} alt={alt} data-testid='image'></img>
    </div>
  )
);

export default ContentImage;

ContentImage.displayName = 'ContentImage';

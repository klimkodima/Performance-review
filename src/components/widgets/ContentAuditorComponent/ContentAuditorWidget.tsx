import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ContentImage } from '../../common';
import ContentRow from './ContentRow';
import { auditorInfo } from './data';
import './ContentAuditorWidget.scss';
import imageIcon from './img/01_Auditor_icon.png';

const ContentAuditorWidget: FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'contentAuditor' });
  return (
    <div className='widget' data-testid='widget'>
      <div className='widget__content content' data-testid='content'>
        <h3 className='content__header' data-testid='content-header'>
          {t('Title')}
        </h3>
        <div className='content__block' data-testid='content-block'>
          {Object.entries(auditorInfo)
            .filter((item) => item[0] !== 'photo')
            .map((item) => (
              <ContentRow
                key={item[0]}
                classesContainer='content__row'
                classesLabel='label'
                classesText='text'
                label={item[0]}
                text={item[1]}
              />
            ))}
        </div>
        {auditorInfo.photo.trim().length ? (
          <ContentImage
            classes='content__img'
            src={auditorInfo.photo}
            alt={auditorInfo.Name}
          />
        ) : (
          <ContentImage
            classes='content__img'
            src={imageIcon}
            alt='user icon'
          />
        )}
      </div>
    </div>
  );
};

export default ContentAuditorWidget;

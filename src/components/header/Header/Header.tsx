import { memo, ReactElement } from 'react';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';

import logoutIcon from 'src/assets/icons/logout-icon.png';
import headerIcon from 'src/assets/icons/header-icon.png';

import './Header.scss';

type HeaderPropsType = {
  onLogoutClick: () => void;
};

const Header = memo(({ onLogoutClick }: HeaderPropsType): ReactElement => {
  const { t } = useTranslation('common', {
    keyPrefix: 'header'
  });
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h2 className='dashboard-name'>{t('title')}</h2>
        <div className='header__logoIcon'>
          <img src={headerIcon} alt='logo icon' />
        </div>
        <div>
          <IconButton className='logoutIcon' onClick={onLogoutClick}>
            <img src={logoutIcon} alt='logout icon' />
          </IconButton>
        </div>
      </div>
    </header>
  );
});

export default Header;

Header.displayName = 'Header';

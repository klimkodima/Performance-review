import { ReactElement, useCallback } from 'react';
import Header from './Header';

const HeaderContainer = (): ReactElement => {
  const handleLogOutClick = useCallback(() => {
    // action
  }, []);

  return <Header onLogoutClick={handleLogOutClick} />;
};

export default HeaderContainer;

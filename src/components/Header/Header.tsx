import React, { FC, ReactNode } from 'react';
import { SHeader } from './SHeader';

interface HeaderProps {
  children: ReactNode;
  searchBar: boolean;
  rounded: boolean;
}

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  const { searchBar, rounded } = props;
  return (
    <SHeader searchBar={searchBar} rounded={rounded}>
      {children}
    </SHeader>
  );
};

export default Header;

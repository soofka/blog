import * as React from 'react';

import Logo from 'components/Logo';
// import Quote from 'components/Quote';
// import LinkIconsBar from 'components/LinkIconsBar';
// import LanguageSwitcher from 'components/LanguageSwitcher';
import Sidebar from 'components/Sidebar';
import Wrapper from 'components/Wrapper';

import { StyledHeader } from './styled';

export const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Wrapper>
        <Logo/>
        <Sidebar />
        {/*<LanguageSwitcher/>*/}
        {/*<Quote/>*/}
        {/*<LinkIconsBar/>*/}
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;

import * as React from 'react';

import Logo from 'blog/components/Logo';
// import Quote from 'components/Quote';
// import LinkIconsBar from 'components/LinkIconsBar';
// import LanguageSwitcher from 'components/LanguageSwitcher';
import Sidebar from 'blog/components/Sidebar';
import Wrapper from 'blog/components/Wrapper';

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

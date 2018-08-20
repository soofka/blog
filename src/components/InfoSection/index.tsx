import * as React from 'react';

import Logo from 'components/Logo';
import Quote from 'components/Quote';
import LinkIconsBar from 'components/LinkIconsBar';
import LanguageSwitcher from 'components/LanguageSwitcher';

import { StyledInfoSection } from './styled';

export const InfoSection = (): JSX.Element => {
  return (
    <StyledInfoSection>
      <Logo/>
      {/*<LanguageSwitcher/>*/}
      <Quote/>
      <LinkIconsBar/>
    </StyledInfoSection>
  );
};

export default InfoSection;

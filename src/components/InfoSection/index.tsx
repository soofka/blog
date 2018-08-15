import * as React from 'react';

import Logo from 'components/Logo';
import Quote from 'components/Quote';
import LinkIconsBar from 'components/LinkIconsBar';
import LanguageSwitcher from 'components/LanguageSwitcher';

import './styles.scss';

export const InfoSection = (): JSX.Element => {
  return (
    <div className="info-section">
      <Logo/>
      {/*<LanguageSwitcher/>*/}
      <Quote/>
      <LinkIconsBar/>
    </div>
  );
};

export default InfoSection;

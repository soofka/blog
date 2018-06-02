import * as React from 'react';

import './styles.scss';

import Logo from 'components/Logo';
import Quote from 'components/Quote';
// import Navigation from 'components/Navigation';
import LinkIconsBar from 'components/LinkIconsBar';

export const InfoSection = (): JSX.Element => {
  return (
    <div className="info-section">
      <Logo/>
      <Quote/>
      <LinkIconsBar/>
    </div>
  );
};

export default InfoSection;

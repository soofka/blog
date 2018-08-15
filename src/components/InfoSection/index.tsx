import * as React from 'react';
import { inject } from 'mobx-react';

import Logo from 'components/Logo';
import Quote from 'components/Quote';
import LinkIconsBar from 'components/LinkIconsBar';
import LanguageSwitcher from 'components/LanguageSwitcher';

import { LanguageStoreInterface } from 'store/language';

import './styles.scss';

interface InfoSectionPropsInterface {
  languageStore?: LanguageStoreInterface;
}

export const InfoSection = (props: InfoSectionPropsInterface): JSX.Element => {
  const { languageStore } = props;

  return (
    <div className="info-section">
      <Logo/>
      <LanguageSwitcher
        onLanguageSelection={(language: string) => languageStore.setLanguage(language)}
      />
      <Quote />
      <LinkIconsBar/>
    </div>
  );
};

export default inject('languageStore')(InfoSection);

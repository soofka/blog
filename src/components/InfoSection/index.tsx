import * as React from 'react';
import { observer } from 'mobx-react';

import Logo from 'components/Logo';
import Quote from 'components/Quote';
import LinkIconsBar from 'components/LinkIconsBar';
// import LanguageSwitcher from 'components/LanguageSwitcher';

import { StoreInterface } from 'store';

import './styles.scss';

interface InfoSectionPropsInterface {
  store: StoreInterface;
}

export const InfoSection = (props: InfoSectionPropsInterface): JSX.Element => {
  const { store } = props;
  const language = store.language.getLanguage();

  return (
    <div className="info-section">
      <Logo/>
      {/*<LanguageSwitcher*/}
        {/*language={language}*/}
        {/*onLanguageSelection={(language: string) => store.language.setLanguage(language)}*/}
      {/*/>*/}
      <Quote language={language} />
      <LinkIconsBar/>
    </div>
  );
};

export default observer(InfoSection);

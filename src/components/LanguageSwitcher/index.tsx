import * as React from 'react';
import { inject } from 'mobx-react';

import { LanguageStoreInterface } from 'store/language';

import GreatBritainFlag from './flags/GreatBritainFlag';
import PolandFlag from './flags/PolandFlag';

import './styles.scss';

interface LanguageSwitcherPropsInterface {
  languageStore?: LanguageStoreInterface;
}

export interface FlagPropsInterface {
  onClick: () => void;
}

export const LanguageSwitcher = (props: LanguageSwitcherPropsInterface): JSX.Element => {
  const { languageStore: { setLanguage } } = props;

  return (
    <ul className="language-switcher">
      <li>
        <GreatBritainFlag onClick={() => setLanguage('en')} />
      </li>
      <li>
        <PolandFlag onClick={() => setLanguage('pl')} />
      </li>
    </ul>
  );
};

export default inject('languageStore')(LanguageSwitcher);

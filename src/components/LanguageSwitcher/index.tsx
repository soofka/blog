import * as React from 'react';
import { inject } from 'mobx-react';

import { LanguageStoreInterface } from 'store/language';

import GreatBritainFlag from './components/GreatBritainFlag';
import PolandFlag from './components/PolandFlag';

import { StyledLanguageSwitcher } from './styled';

interface LanguageSwitcherPropsInterface {
  languageStore?: LanguageStoreInterface;
}

export interface FlagPropsInterface {
  onClick: () => void;
}

export const LanguageSwitcher = (props: LanguageSwitcherPropsInterface): JSX.Element => {
  const { languageStore: { setLanguage } } = props;

  return (
    <StyledLanguageSwitcher>
      <li>
        <GreatBritainFlag onClick={() => setLanguage('en')} />
      </li>
      <li>
        <PolandFlag onClick={() => setLanguage('pl')} />
      </li>
    </StyledLanguageSwitcher>
  );
};

export default inject('languageStore')(LanguageSwitcher);

import { inject } from 'mobx-react';
import * as React from 'react';

import { LanguageStoreInterface } from 'blog/store/language';

import { GreatBritainFlag } from './components/GreatBritainFlag';
import { PolandFlag } from './components/PolandFlag';

import { StyledLanguageSwitcher } from './styled';

interface LanguageSwitcherPropsInterface {
  languageStore?: LanguageStoreInterface;
}

export interface FlagPropsInterface extends React.HTMLAttributes<any> {}

const LanguageSwitcherComponent = (props: LanguageSwitcherPropsInterface): JSX.Element => {
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

export const LanguageSwitcher = inject('languageStore')(LanguageSwitcherComponent);

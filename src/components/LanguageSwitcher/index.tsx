import * as React from 'react';

import GreatBritainFlag from './flags/GreatBritainFlag';
import PolandFlag from './flags/PolandFlag';

import './styles.scss';

interface LanguageSwitcherPropsInterface {
  language: string;
  onLanguageSelection: (language: string) => void;
}

export interface FlagPropsInterface {
  onClick: () => void;
}

export const LanguageSwitcher = (props: LanguageSwitcherPropsInterface): JSX.Element => {
  const { language, onLanguageSelection } = props;
  return (
    <ul className="language-switcher">
      <li>
        <GreatBritainFlag onClick={() => onLanguageSelection('en')} />
      </li>
      <li>
        <PolandFlag onClick={() => onLanguageSelection('pl')} />
      </li>
    </ul>
  );
};

export default LanguageSwitcher;

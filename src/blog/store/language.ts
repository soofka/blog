import { action, decorate, observable } from 'mobx';

import { getCurrentLanguage, setCurrentLanguage } from 'blog/common/helpers';
import { isLanguageValid } from 'common/helpers';
import { Language } from 'common/types';

export interface LanguageStoreInterface {
  language: Language;
  getLanguage: () => Language;
  setLanguage: (language: Language) => void;
}

class LanguageStore implements LanguageStoreInterface {

  language = getCurrentLanguage();

  getLanguage = (): Language => this.language;

  setLanguage = (language: Language): void => {
    if (isLanguageValid(language)) {
      this.language = language;
      setCurrentLanguage(language);
    }
  }

}

decorate(LanguageStore, {
  language: observable,
  setLanguage: action,
});

export const languageStore = new LanguageStore();

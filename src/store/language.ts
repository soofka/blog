import { decorate, observable } from 'mobx';

import LanguageHandler from 'common/LanguageHandler';

export interface LanguageStoreInterface {
  language: string;
  getLanguage: () => string;
  setLanguage: (language: string) => void;
}

class LanguageStore implements LanguageStoreInterface {

  language = LanguageHandler.getCurrentLanguage();

  getLanguage = (): string => this.language;

  setLanguage = (language: string): void => {
    if (LanguageHandler.isLanguageValid(language)) {
      this.language = language;
      LanguageHandler.setCurrentLanguage(language);
    }
  }

}

decorate(LanguageStore, {
  language: observable,
});

export const languageStore = new LanguageStore();

import { RouterStore } from 'mobx-react-router';
import { languageStore, LanguageStoreInterface } from 'store/language';

export interface StoreInterface {
  routing: RouterStore;
  language: LanguageStoreInterface;
}

const routingStore = new RouterStore();

export const store = {
  routing: routingStore,
  language: languageStore,
};

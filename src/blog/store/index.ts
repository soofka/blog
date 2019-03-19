import { RouterStore } from 'mobx-react-router';
import { languageStore, LanguageStoreInterface } from 'blog/store/language';

export interface StoreInterface {
  routingStore: RouterStore;
  languageStore: LanguageStoreInterface;
}

const routingStore = new RouterStore();

export const store = {
  routingStore,
  languageStore,
};

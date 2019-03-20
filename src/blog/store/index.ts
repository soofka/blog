import { languageStore, LanguageStoreInterface } from 'blog/store/language';
import { RouterStore } from 'mobx-react-router';

export interface StoreInterface {
  routingStore: RouterStore;
  languageStore: LanguageStoreInterface;
}

const routingStore = new RouterStore();

export const store = {
  routingStore,
  languageStore,
};

import { Language } from 'common/types';
import { RouteComponentProps } from 'react-router';

export const mockStoreProps = {
  languageStore: {
    language: 'en' as Language,
    getLanguage: () => 'en' as Language,
    setLanguage: (language: Language) => null,
  },
};

export const mockRouteProps = {
  match: {
    params: {},
  },
} as RouteComponentProps<any>;

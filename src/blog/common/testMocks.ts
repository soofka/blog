export const mockStoreProps = {
  languageStore: {
    language: 'testLanguage',
    getLanguage: () => 'testLanguage',
    setLanguage: (language: string) => null,
  },
};

export const mockRouteProps = {
  match: {
    params: {
      tag: 'testTag',
      date: 'testDate',
      niceUrl: 'testNiceUrl',
    },
  },
};

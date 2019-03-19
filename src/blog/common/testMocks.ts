export const mockStoreProps = {
  languageStore: {
    getLanguage: () => 'en',
    setLanguage: () => null,
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

import * as React from 'react';
import { inject, observer } from 'mobx-react';

import LabelsProvider from 'common/LabelsProvider';
import { LanguageStoreInterface } from 'store/language';

import Meta from 'components/Meta';

interface EntriesByTagMetaPropsInterface {
  tag: string;
  languageStore?: LanguageStoreInterface;
}

export const EntriesByTagMeta = (props: EntriesByTagMetaPropsInterface) => {
  const { tag, languageStore: { getLanguage } } = props;
  return <Meta
    title={LabelsProvider.getLabel('page_title__entries_by_tag', { tag }, getLanguage())}
    keywords={LabelsProvider.getLabel('page_keywords', { keywords: tag }, getLanguage())}
  />;
};

export default inject('languageStore')(observer(EntriesByTagMeta));

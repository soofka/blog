import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';

import { Meta } from '../../';

interface EntriesByTagMetaPropsInterface {
  tag: string;
  languageStore?: LanguageStoreInterface;
}

export const EntriesByTagMetaComponent = (props: EntriesByTagMetaPropsInterface) => {
  const { tag, languageStore: { getLanguage } } = props;
  return <Meta
    title={getLabel('page_title__entries_by_tag', { tag }, getLanguage())}
    keywords={getLabel('page_keywords', { keywords: tag }, getLanguage())}
  />;
};

export const EntriesByTagMeta = inject('languageStore')(observer(EntriesByTagMetaComponent));

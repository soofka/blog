import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';

import { Meta } from 'blog/components/meta';
import { TagInterface } from 'common/types';

interface EntriesByTagMetaPropsInterface {
  tag: TagInterface;
  languageStore?: LanguageStoreInterface;
}

export const EntriesByTagMetaComponent = (props: EntriesByTagMetaPropsInterface) => {
  const { tag: { name }, languageStore: { getLanguage } } = props;
  return <Meta
    title={getLabel('page_title__entries_by_tag', { tag: name }, getLanguage())}
    keywords={getLabel('page_keywords', { keywords: name }, getLanguage())}
  />;
};

export const EntriesByTagMeta = inject('languageStore')(observer(EntriesByTagMetaComponent));

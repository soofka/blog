import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';

import { Meta } from 'blog/components/meta';

interface EntryMetaPropsInterface {
  title: string;
  description: string;
  keywords: string[];
  imageUrl: string;
  languageStore?: LanguageStoreInterface;
}

export const EntryMetaComponent = (props: EntryMetaPropsInterface) => {
  const { title, description, keywords, imageUrl, languageStore: { getLanguage } } = props;
  return <Meta
    title={getLabel('page_title__entry', { entry_title: title }, getLanguage())}
    description={getLabel('page_description', { description }, getLanguage())}
    keywords={getLabel('page_keywords', { keywords: keywords.join(', ') }, getLanguage())}
    imageUrl={imageUrl}
  />;
};

export const EntryMeta = inject('languageStore')(observer(EntryMetaComponent));

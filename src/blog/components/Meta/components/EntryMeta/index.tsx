import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';
import { getImageFilePath } from 'common/helpers';

import { Meta } from '../../';

interface EntryMetaPropsInterface {
  title: string;
  description: string;
  keywords: string[];
  imageFileName: string;
  languageStore?: LanguageStoreInterface;
}

export const EntryMetaComponent = (props: EntryMetaPropsInterface) => {
  const { title, description, keywords, imageFileName, languageStore: { getLanguage } } = props;
  return <Meta
    title={getLabel('page_title__entry', { entry_title: title }, getLanguage())}
    description={getLabel('page_description', { description }, getLanguage())}
    keywords={getLabel('page_keywords', { keywords: keywords.join(', ') }, getLanguage())}
    imageUrl={getImageFilePath(imageFileName)}
  />;
};

export const EntryMeta = inject('languageStore')(observer(EntryMetaComponent));

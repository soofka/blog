import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';

import { Meta } from '../../';

interface ArchiveMetaPropsInterface {
  description: string;
  keywords: string[];
  languageStore?: LanguageStoreInterface;
}

export const ArchiveMetaComponent = (props: ArchiveMetaPropsInterface) => {
  const { description, keywords, languageStore: { getLanguage } } = props;
  return <Meta
    title={getLabel('page_title__archive', {}, getLanguage())}
    description={getLabel('page_description', { description }, getLanguage())}
    keywords={getLabel('page_keywords', { keywords: keywords.join(', ') }, getLanguage())}
  />;
};

export const ArchiveMeta = inject('languageStore')(observer(ArchiveMetaComponent));

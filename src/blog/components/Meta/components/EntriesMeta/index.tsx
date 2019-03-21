import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';

import { Meta } from '../../';

interface EntriesMetaPropsInterface {
  languageStore?: LanguageStoreInterface;
}

export const EntriesMetaComponent = (props: EntriesMetaPropsInterface) => {
  const { languageStore: { getLanguage } } = props;
  return <Meta
    title={getLabel('page_title', {}, getLanguage())}
    description={getLabel('page_description', { description: '' }, getLanguage())}
    keywords={getLabel('page_keywords', { keywords: '' }, getLanguage())}
  />;
};

export const EntriesMeta = inject('languageStore')(observer(EntriesMetaComponent));

import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';

import { Meta } from 'blog/components/meta';

interface HomeMetaPropsInterface {
  languageStore?: LanguageStoreInterface;
}

export const HomeMetaComponent = (props: HomeMetaPropsInterface) => {
  const { languageStore: { getLanguage } } = props;
  return <Meta
    title={getLabel('page_title', {}, getLanguage())}
    description={getLabel('page_description', { description: '' }, getLanguage())}
    keywords={getLabel('page_keywords', { keywords: '' }, getLanguage())}
  />;
};

export const HomeMeta = inject('languageStore')(observer(HomeMetaComponent));

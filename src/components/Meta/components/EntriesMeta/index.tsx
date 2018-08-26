import * as React from 'react';
import { inject, observer } from 'mobx-react';

import LabelsProvider from 'common/LabelsProvider';
import { LanguageStoreInterface } from 'store/language';

import Meta from 'components/Meta';

interface EntriesMetaPropsInterface {
  languageStore?: LanguageStoreInterface;
}

export const EntriesMeta = (props: EntriesMetaPropsInterface) => {
  const { languageStore: { getLanguage } } = props;
  return <Meta
    title={LabelsProvider.getLabel('page_title', {}, getLanguage())}
    description={LabelsProvider.getLabel('page_description', { description: '' }, getLanguage())}
    keywords={LabelsProvider.getLabel('page_keywords', { keywords: '' }, getLanguage())}
  />;
};

export default inject('languageStore')(observer(EntriesMeta));

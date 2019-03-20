import { inject, observer } from 'mobx-react';
import * as React from 'react';

import AssetsProvider from 'common/AssetsProvider';
import LabelsProvider from 'common/LabelsProvider';
import { LanguageStoreInterface } from 'store/language';

import Meta from 'components/Meta';

interface EntryMetaPropsInterface {
  title: string;
  description: string;
  keywords: string[];
  imageFileName: string;
  languageStore?: LanguageStoreInterface;
}

export const EntryMeta = (props: EntryMetaPropsInterface) => {
  const { title, description, keywords, imageFileName, languageStore: { getLanguage } } = props;
  return <Meta
    title={LabelsProvider.getLabel('page_title__entry', { entry_title: title }, getLanguage())}
    description={LabelsProvider.getLabel('page_description', { description }, getLanguage())}
    keywords={LabelsProvider.getLabel('page_keywords', { keywords: keywords.join(', ') }, getLanguage())}
    imageUrl={AssetsProvider.getEntryImageFilePath(imageFileName)}
  />;
};

export default inject('languageStore')(observer(EntryMeta));

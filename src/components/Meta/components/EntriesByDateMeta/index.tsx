import * as React from 'react';
import { inject, observer } from 'mobx-react';

import LabelsProvider from 'common/LabelsProvider';
import { LanguageStoreInterface } from 'store/language';

import Meta from 'components/Meta';

interface EntriesByDateMetaPropsInterface {
  date: string;
  languageStore?: LanguageStoreInterface;
}

export const EntriesByDateMeta = (props: EntriesByDateMetaPropsInterface) => {
  const { date, languageStore: { getLanguage } } = props;
  return <Meta
    title={LabelsProvider.getLabel('page_title__entries_by_date', { date }, getLanguage())}
  />;
};

export default inject('languageStore')(observer(EntriesByDateMeta));

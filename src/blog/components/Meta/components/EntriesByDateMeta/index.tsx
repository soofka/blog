import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';

import { Meta } from '../../';

interface EntriesByDateMetaPropsInterface {
  date: string;
  languageStore?: LanguageStoreInterface;
}

export const EntriesByDateMetaComponent = (props: EntriesByDateMetaPropsInterface) => {
  const { date, languageStore: { getLanguage } } = props;
  return <Meta
    title={getLabel('page_title__entries_by_date', { date }, getLanguage())}
  />;
};

export const EntriesByDateMeta = inject('languageStore')(observer(EntriesByDateMetaComponent));

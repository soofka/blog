import { inject, observer } from 'mobx-react';
import * as React from 'react';

import LabelsProvider from 'common/LabelsProvider';
import { LanguageStoreInterface } from 'store/language';

interface LabelPropsInterface {
  name: string;
  params?: any;
  languageStore?: LanguageStoreInterface;
}

export const Label = (props: LabelPropsInterface) => {
  const { name, params = {}, languageStore: { getLanguage }, ...rest } = props;
  return <span {...rest}>{LabelsProvider.getLabel(name, params, getLanguage())}</span>;
};

export default inject('languageStore')(observer(Label));

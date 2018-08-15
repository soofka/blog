import * as React from 'react';
import { inject, observer } from 'mobx-react';

import LabelsProvider from 'common/LabelsProvider';
import { LanguageStoreInterface } from 'store/language';

interface LabelPropsInterface {
  name: string;
  languageStore?: LanguageStoreInterface;
}

export const Label = (props: LabelPropsInterface) => {
  const { name, languageStore: { getLanguage }, ...rest } = props;
  return <span {...rest}>{LabelsProvider.getLabel(name, getLanguage())}</span>;
};

export default inject('languageStore')(observer(Label));

import * as React from 'react';
import { inject, observer } from 'mobx-react';

import LabelsProvider from 'common/LabelsProvider';
import { LanguageStoreInterface } from 'store/language';

interface LabelPropsInterface {
  name: string;
  languageStore?: LanguageStoreInterface;
}

export const Label = (props: LabelPropsInterface) => {
  const { name, languageStore, ...rest } = props;
  return <span {...rest}>{LabelsProvider.getLabel(name, languageStore.getLanguage())}</span>;
};

export default inject('languageStore')(observer(Label));

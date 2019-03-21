import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { getLabel } from 'blog/common/helpers';
import { LanguageStoreInterface } from 'blog/store/language';

interface LabelPropsInterface extends React.HTMLAttributes<any> {
  name: string;
  params?: { [s: string]: string };
  languageStore?: LanguageStoreInterface;
}

const LabelComponent = (props: LabelPropsInterface): JSX.Element => {
  const { name, params = {}, languageStore: { getLanguage }, ...rest } = props;
  return <span {...rest}>{getLabel(name, params, getLanguage())}</span>;
};

export const Label = inject('languageStore')(observer(LabelComponent));

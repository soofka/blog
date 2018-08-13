import * as React from 'react';

import LabelsProvider from 'common/LabelsProvider';

import './styles.scss';

interface QuotePropsInterface {
  language: string;
}

export const Quote = (props: QuotePropsInterface): JSX.Element => {
  const { language } = props;
  return (
    <p className="quote">
      {LabelsProvider.getLabel('quote', language)}
    </p>
  );
};

export default Quote;

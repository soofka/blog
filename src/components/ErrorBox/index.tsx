import * as React from 'react';

import LabelsProvider from 'common/LabelsProvider';

interface ErrorBoxPropsInterface {
  language: string;
  message: string;
}

export const ErrorBox = (props: ErrorBoxPropsInterface): JSX.Element => {
  const { language, message = LabelsProvider.getLabel('errors__default', language) } = props;

  return (
    <div>
      <h3>{LabelsProvider.getLabel('errors__header', language)}</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBox;

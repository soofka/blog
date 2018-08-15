import * as React from 'react';

import Label from 'components/Label';

interface ErrorBoxPropsInterface {
  message?: any;
}

export const ErrorBox = (props: ErrorBoxPropsInterface): JSX.Element => {
  const { message = <Label name="errors__default"/> } = props;

  return (
    <div>
      <h3>{<Label name="errors__header"/>}</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBox;

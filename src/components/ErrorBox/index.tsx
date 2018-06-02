import * as React from 'react';

interface ErrorBoxPropsInterface {
  message?: string;
}

export const ErrorBox = (props: ErrorBoxPropsInterface): JSX.Element => {
  let { message } = props;

  if (!message) {
    message = 'Oops! Something wrong happened. Please try again.';
  }

  return (
    <div>
      <h3>Error!</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBox;

import * as React from 'react';

import ErrorBox from 'components/ErrorBox';

interface ErrorPropsInterface {
  message?: string;
}

export const Error = (props: ErrorPropsInterface): JSX.Element => {
  const { message = 'Whoops, there is no such page.' } = props;
  return (
    <div>
      <ErrorBox message={message} />
    </div>
  );
};

export default Error;

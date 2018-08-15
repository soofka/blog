import * as React from 'react';

import ErrorBox from 'components/ErrorBox';
import Label from 'components/Label';

export const NotFoundError = (): JSX.Element => {
  return (
    <div>
      <ErrorBox
        message={<Label name="errors__page_not_found"/>} />
    </div>
  );
};

export default NotFoundError;

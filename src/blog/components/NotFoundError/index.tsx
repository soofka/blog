import * as React from 'react';

import { ErrorBox } from 'blog/components/ErrorBox';
import { Label } from 'blog/components/Label';

export const NotFoundError = (): JSX.Element => {
  return (
    <div>
      <ErrorBox
        message={<Label name="errors__page_not_found"/>} />
    </div>
  );
};

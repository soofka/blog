import * as React from 'react';
import { Link } from 'react-router-dom';

import { Label } from 'blog/components/Label';
import { getHomeBaseUrl } from 'common/helpers';

export const EntryBackLink = (): JSX.Element => (
  <Link to={getHomeBaseUrl()}>
    &laquo; {<Label name="entry__back" />}
  </Link>
);

import * as React from 'react';
import { Link } from 'react-router-dom';

import RoutingProvider from 'common/RoutingProvider';

import Label from 'components/Label';

export const EntryBackLink = (): JSX.Element => (
  <Link to={RoutingProvider.getHomeNiceUrlBasePath()}>
    &laquo; {<Label name="entry__back" />}
  </Link>
);

export default EntryBackLink;

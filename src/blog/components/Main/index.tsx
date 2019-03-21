import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import {
  getArchiveBaseUrl,
  getEntryBaseUrl,
  getHomeBaseUrl,
  getTagBaseUrl,
} from 'common/helpers';

import Wrapper from 'blog/components/Wrapper';

// import Archive from 'containers/Archive';
import NotFoundError from 'blog/components/NotFoundError';
import AllEntries from 'blog/containers/Entries/components/AllEntries';
import AllEntriesByDate from 'blog/containers/Entries/components/AllEntriesByDate';
import AllEntriesByTag from 'blog/containers/Entries/components/AllEntriesByTag';
import OneEntry from 'blog/containers/Entries/components/OneEntry';

import { StyledMain } from './styled';

// @todo: fix routes
export const MainComponent = (): JSX.Element => {
  return (
    <StyledMain>
      <Wrapper>
        <Switch>
          <Route
            exact
            path={getHomeBaseUrl()}
            component={AllEntries}
          />
          {/*<Route*/}
            {/*exact*/}
            {/*path={RoutingProvider.getArchiveNiceUrlBasePath()}*/}
            {/*component={Archive}*/}
          {/*/>*/}
          <Route
            path={`${getTagBaseUrl()}/:tag`}
            component={AllEntriesByTag}
          />
          <Route
            path={`${getArchiveBaseUrl()}/:date`}
            component={AllEntriesByDate}
          />
          <Route
            path={`${getEntryBaseUrl()}/:niceUrl`}
            component={OneEntry}
          />
          <Route
            component={NotFoundError}
          />
        </Switch>
      </Wrapper>
    </StyledMain>
  );
};

export const Main = withRouter(MainComponent);

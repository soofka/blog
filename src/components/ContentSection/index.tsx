import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import RoutingProvider from 'common/RoutingProvider';

import AllEntries from 'containers/Entries/components/AllEntries';
import AllEntriesByTag from 'containers/Entries/components/AllEntriesByTag';
import AllEntriesByDate from 'containers/Entries/components/AllEntriesByDate';
import OneEntry from 'containers/Entries/components/OneEntry';
import NotFoundError from 'components/NotFoundError';

import { StyledContentSection } from './styled';

export const ContentSection = (): JSX.Element => {
  return (
    <StyledContentSection>
      <Switch>
        <Route
          exact
          path={RoutingProvider.getHomeNiceUrlBasePath()}
          component={AllEntries}
        />
        <Route
          path={`${RoutingProvider.getEntriesByTagNiceUrlBasePath()}/:tag`}
          component={AllEntriesByTag}
        />
        <Route
          path={`${RoutingProvider.getEntriesByDateNiceUrlBasePath()}/:date`}
          component={AllEntriesByDate}
        />
        <Route
          path={`${RoutingProvider.getEntryNiceUrlBasePath()}/:niceUrl`}
          component={OneEntry}
        />
        <Route
          component={NotFoundError}
        />
      </Switch>
    </StyledContentSection>
  );
};

export default withRouter(ContentSection);

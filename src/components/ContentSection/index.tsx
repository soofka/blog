import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import RoutingProvider from 'common/RoutingProvider';

import AllEntries from 'containers/Entries/variants/AllEntries';
import AllEntriesByTag from 'containers/Entries/variants/AllEntriesByTag';
import AllEntriesByDate from 'containers/Entries/variants/AllEntriesByDate';
import OneEntry from 'containers/Entries/variants/OneEntry';
import NotFoundError from 'components/NotFoundError';

import './styles.scss';

export const ContentSection = (): JSX.Element => {
  return (
    <div className="content-section">
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
    </div>
  );
};

export default withRouter(ContentSection);

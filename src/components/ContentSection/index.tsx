import * as React from 'react';

import { Route } from 'react-router-dom';

import './styles.scss';

import RoutingProvider from 'common/RoutingProvider';

import Home from 'views/Home';
import About from 'views/About';

import Entry from 'views/Entry';
import EntriesByTag from 'views/EntriesByTag';
import EntriesByDate from 'views/EntriesByDate';
import Error from 'views/Error';

export const ContentSection = (): JSX.Element => {
  return (
    <div className="content-section">
      <Route
        exact
        path={RoutingProvider.getHomeNiceUrlBasePath()}
        component={Home}
      />
      <Route
        path={RoutingProvider.getAboutNiceUrlBasePath()}
        component={About}
      />
      <Route
        path={`${RoutingProvider.getEntryNiceUrlBasePath()}/:niceUrl`}
        component={Entry}
      />
      <Route
        path={`${RoutingProvider.getEntriesByTagNiceUrlBasePath()}/:tag`}
        component={EntriesByTag}
      />
      <Route
        path={`${RoutingProvider.getEntriesByDateNiceUrlBasePath()}/:date`}
        component={EntriesByDate}
      />
      <Route
        path={`${RoutingProvider.getErrorNiceUrlBasePath()}/:errorMessage`}
        component={Error}
      />
    </div>
  );
};

export default ContentSection;

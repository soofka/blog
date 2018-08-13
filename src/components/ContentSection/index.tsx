import * as React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';

import './styles.scss';

import RoutingProvider from 'common/RoutingProvider';
import { StoreInterface } from 'store';

import AllEntries from 'containers/Entries/variants/AllEntries';
import AllEntriesByTag from 'containers/Entries/variants/AllEntriesByTag';
import AllEntriesByDate from 'containers/Entries/variants/AllEntriesByDate';
import OneEntry from 'containers/Entries/variants/OneEntry';
import NotFoundError from 'components/NotFoundError';

interface ContentSectionPropsInterface {
  store: StoreInterface;
}

export const ContentSection = (props: ContentSectionPropsInterface): JSX.Element => {
  const { store } = props;
  const language = store.language.getLanguage();

  return (
    <div className="content-section">
      <Switch>
        <Route
          exact
          path={RoutingProvider.getHomeNiceUrlBasePath()}
          render={(routeProps: RouteComponentProps<any>) => <AllEntries language={language} {...routeProps}/>}
        />
        <Route
          path={`${RoutingProvider.getEntriesByTagNiceUrlBasePath()}/:tag`}
          render={(routeProps: RouteComponentProps<any>) => <AllEntriesByTag language={language} {...routeProps}/>}
        />
        <Route
          path={`${RoutingProvider.getEntriesByDateNiceUrlBasePath()}/:date`}
          render={(routeProps: RouteComponentProps<any>) => <AllEntriesByDate language={language} {...routeProps}/>}
        />
        <Route
          path={`${RoutingProvider.getEntryNiceUrlBasePath()}/:niceUrl`}
          render={(routeProps: RouteComponentProps<any>) => <OneEntry language={language} {...routeProps}/>}
        />
        <Route
          render={(routeProps: RouteComponentProps<any>) => <NotFoundError language={language} {...routeProps}/>}
        />
      </Switch>
    </div>
  );
};

export default withRouter(observer(ContentSection) as any) as any;

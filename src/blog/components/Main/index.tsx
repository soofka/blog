import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import {
  getAboutMeBaseUrl,
  getArchiveBaseUrl,
  getEntryBaseUrl,
  getHomeBaseUrl,
  getTagBaseUrl,
  getTalkBaseUrl,
  getTalksBaseUrl,
} from 'common/helpers';

import { Wrapper } from 'blog/components/Wrapper';

import { AboutMe } from 'blog/containers/AboutMe';
import { Archive } from 'blog/containers/Archive';
import { EntriesByTag } from 'blog/containers/EntriesByTag';
import { Entry } from 'blog/containers/Entry';
import { Home } from 'blog/containers/Home';
import { NotFoundError } from 'blog/containers/NotFoundError';
import { Talk } from 'blog/containers/Talk';
import { Talks } from 'blog/containers/Talks';

import { StyledMain } from './styled';

export const MainComponent = (): JSX.Element => {
  return (
    <StyledMain>
      <Wrapper>
        <Switch>
          <Route exact path={getHomeBaseUrl()} component={Home} />
          <Route path={`${getEntryBaseUrl()}/:idOrNiceUrl`} component={Entry} />
          <Route path={`${getTagBaseUrl()}/:idOrNiceUrl`} component={EntriesByTag} />
          <Route path={getTalksBaseUrl()} component={Talks} />
          <Route path={`${getTalkBaseUrl()}/:idOrNiceUrl`} component={Talk} />
          <Route path={getArchiveBaseUrl()} component={Archive} />
          <Route path={getAboutMeBaseUrl()} component={AboutMe} />
          <Route component={NotFoundError} />
        </Switch>
      </Wrapper>
    </StyledMain>
  );
};

export const Main = withRouter(MainComponent);

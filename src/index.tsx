import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { store } from 'store';
import Blog from 'components/Blog';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.routing);

const render = () => {
  ReactDOM.render(
    <Provider {...store}>
      <Router history={history}>
        <Blog store={store} />
      </Router>
    </Provider>,
    document.querySelector('app'),
  );
};

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
};

render();
registerServiceWorker();

declare const module: any;

if (module.hot) {
  module.hot.accept('./components/Blog', () => { render(); });
}

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import Blog from 'blog/components/Blog';

import { store } from 'blog/store';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.routingStore);
const rootElement = document.querySelector('main');

const render = () => {
  ReactDOM.render(
    <Provider {...store}>
      <Router history={history}>
        <Blog/>
      </Router>
    </Provider>,
    rootElement,
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
  module.hot.accept('blog/components/Blog', () => { render(); });
}

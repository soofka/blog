import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Blog from 'components/Blog';

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Blog />
    </BrowserRouter>,
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

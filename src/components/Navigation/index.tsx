import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import RoutingProvider from 'common/RoutingProvider';

export const Navigation = (): JSX.Element => {
  return (
    <div>
      <ul className="navigation">
        <Link to={RoutingProvider.getHomeNiceUrlBasePath()}><li>Home</li></Link>
        <Link to={RoutingProvider.getAboutNiceUrlBasePath()}><li>About</li></Link>
      </ul>
    </div>
  );
};

export default Navigation;

import * as React from 'react';
import { Link } from 'react-router-dom';

import AssetsProvider from 'common/AssetsProvider';
import RoutingProvider from 'common/RoutingProvider';

import './styles.scss';

export const Logo = (): JSX.Element => {
  return (
    <Link to={RoutingProvider.getHomeNiceUrlBasePath()}>
      <img src={`${AssetsProvider.getImagesBasePath()}/soofka-logo.jpg`} className="logo" />
    </Link>
  );
};

export default Logo;

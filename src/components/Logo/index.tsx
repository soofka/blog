import * as React from 'react';
import { Link } from 'react-router-dom';

import AssetsProvider from 'common/AssetsProvider';
import RoutingProvider from 'common/RoutingProvider';

import './styles.scss';

const LOGO_ITEMS_COUNT = 3;

interface LogoPropsInterface {
  number?: number;
}

export const Logo = (props: LogoPropsInterface): JSX.Element => {
  const { number = Math.ceil(Math.random() * LOGO_ITEMS_COUNT) } = props;
  return (
    <Link to={RoutingProvider.getHomeNiceUrlBasePath()}>
      <img
        src={`${AssetsProvider.getImagesBasePath()}/soofka-logo-${number}.jpg`}
        className="logo"
      />
    </Link>
  );
};

export default Logo;

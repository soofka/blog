import * as React from 'react';
import { Link } from 'react-router-dom';

import AssetsProvider from 'common/AssetsProvider';
import RoutingProvider from 'common/RoutingProvider';

import Label from 'components/Label';

import { StyledLogoImageContainer, StyledLogoImage, StyledLogoHeader } from './styled';

const LOGO_ITEMS_COUNT = 4;

interface LogoPropsInterface {
  number?: number;
}

export const Logo = (props: LogoPropsInterface): JSX.Element => {
  const { number = Math.ceil(Math.random() * LOGO_ITEMS_COUNT) } = props;
  return (
    <div>
      <StyledLogoImageContainer>
        <Link to={RoutingProvider.getHomeNiceUrlBasePath()}>
          <StyledLogoImage src={`${AssetsProvider.getImagesBasePath()}/soofka-logo-${number}.jpg`}/>
        </Link>
      </StyledLogoImageContainer>
      <Link to={RoutingProvider.getHomeNiceUrlBasePath()}>
        <StyledLogoHeader>
          <Label name="page_title" />
        </StyledLogoHeader>
      </Link>
    </div>
  );
};

export default Logo;

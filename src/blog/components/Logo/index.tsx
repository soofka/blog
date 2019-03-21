import * as React from 'react';
import { Link } from 'react-router-dom';

import { Label } from 'blog/components/Label';
import { getHomeBaseUrl, getImageFilePath } from 'common/helpers';

import { StyledLogoHeader, StyledLogoImage, StyledLogoImageContainer } from './styled';

const LOGO_ITEMS_COUNT = 4;

interface LogoPropsInterface {
  number?: number;
}

export const Logo = (props: LogoPropsInterface): JSX.Element => {
  const { number = Math.ceil(Math.random() * LOGO_ITEMS_COUNT) } = props;
  return (
    <div>
      <StyledLogoImageContainer>
        <Link to={getHomeBaseUrl()}>
          <StyledLogoImage src={getImageFilePath(`soofka-logo-${number}.jpg`)} />
        </Link>
      </StyledLogoImageContainer>
      <Link to={getHomeBaseUrl()}>
        <StyledLogoHeader>
          <Label name="page_title" />
        </StyledLogoHeader>
      </Link>
    </div>
  );
};

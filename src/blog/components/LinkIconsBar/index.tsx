import * as React from 'react';

import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import LastFmIcon from './icons/LastFmIcon';

import { StyledLinkIconsBar } from './styled';

export interface SvgIconPropsInterface {
  fill?: string;
}

export const LinkIconsBar = (): JSX.Element => {
  const color = '#c3c3c3';
  return (
    <StyledLinkIconsBar>
      <li>
        <LinkedInIcon fill={color} />
      </li>
      <li>
        <TwitterIcon fill={color} />
      </li>
      <li>
        <GitHubIcon fill={color} />
      </li>
      <li>
        <InstagramIcon fill={color} />
      </li>
      <li>
        <LastFmIcon fill={color} />
      </li>
    </StyledLinkIconsBar>
  );
};

export default LinkIconsBar;

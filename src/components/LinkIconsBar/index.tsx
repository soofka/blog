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
  return (
    <StyledLinkIconsBar>
      <li>
        <LinkedInIcon fill="#c3c3c3" />
      </li>
      <li>
        <TwitterIcon fill="#c3c3c3" />
      </li>
      <li>
        <GitHubIcon fill="#c3c3c3" />
      </li>
      <li>
        <InstagramIcon fill="#c3c3c3" />
      </li>
      <li>
        <LastFmIcon fill="#c3c3c3" />
      </li>
    </StyledLinkIconsBar>
  );
};

export default LinkIconsBar;

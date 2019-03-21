import * as React from 'react';

import { GitHubIcon } from './icons/GitHubIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { LastFmIcon } from './icons/LastFmIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { TwitterIcon } from './icons/TwitterIcon';

import { StyledLinkIconsBar } from './styled';

export interface SvgIconPropsInterface extends React.SVGAttributes<any> {}

export const LinkIconsBar = (): JSX.Element => (
  <StyledLinkIconsBar>
    <li>
      <LinkedInIcon />
    </li>
    <li>
      <TwitterIcon />
    </li>
    <li>
      <GitHubIcon />
    </li>
    <li>
      <InstagramIcon />
    </li>
    <li>
      <LastFmIcon />
    </li>
  </StyledLinkIconsBar>
);

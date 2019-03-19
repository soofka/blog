import * as React from 'react';

import Scroller from 'common/Scroller';
import Label from 'components/Label';

import { StyledScrollTopButton } from './styled';

export const ScrollTopButton = (): JSX.Element => {
  return(
    <StyledScrollTopButton
      href="#"
      onClick={(e) => {
        e.preventDefault();
        Scroller.scrollToTop();
      }}
    >
      &uarr; <Label name="scroll_to_top"/>
    </StyledScrollTopButton>
  );
};

export default ScrollTopButton;

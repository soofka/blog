import * as React from 'react';

import { scrollToTop } from 'blog/common/helpers';
import { Label } from 'blog/components/Label';

import { StyledScrollTopButton } from './styled';

export const ScrollTopButton = (): JSX.Element => {
  return(
    <StyledScrollTopButton
      href="#"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      &uarr; <Label name="scroll_to_top"/>
    </StyledScrollTopButton>
  );
};

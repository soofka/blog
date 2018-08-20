import * as React from 'react';

import Label from 'components/Label';

import { StyledQuote } from './styled';

export const Quote = (): JSX.Element => {
  return (
    <StyledQuote>
      <Label name="quote"/>
    </StyledQuote>
  );
};

export default Quote;

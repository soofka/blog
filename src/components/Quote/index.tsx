import * as React from 'react';

import Label from 'components/Label';

import './styles.scss';

export const Quote = (): JSX.Element => {
  return (
    <p className="quote">
      <Label name="quote"/>
    </p>
  );
};

export default Quote;

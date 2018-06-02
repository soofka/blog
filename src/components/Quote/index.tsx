import * as React from 'react';

import './styles.scss';

export const Quote = (): JSX.Element => {
  return (
    <p className="quote">
      Passionate of programming in general, lately focused on JavaScript particularly.
      Ultimately I would like to have some major contribution to development of our civilization,
      still thinking how JS can help me with that task though.
      Also interested in astronomy and e-sports.
    </p>
  );
};

export default Quote;
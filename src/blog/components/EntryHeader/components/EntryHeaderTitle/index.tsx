import * as React from 'react';
import { Link } from 'react-router-dom';

import { StyledEntryHeaderTitle } from './styled';

interface EntryHeaderTitlePropsInterface {
  title: string;
  link: string;
}

export const EntryHeaderTitle = (props: EntryHeaderTitlePropsInterface): JSX.Element => {
  const { title, link } = props;

  return (
    <StyledEntryHeaderTitle>
      <Link to={link}>{title}</Link>
    </StyledEntryHeaderTitle>
  );
};

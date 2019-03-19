import * as React from 'react';

import Label from 'components/Label';

import { StyledEntryHeaderMeta } from './styled';

interface EntryHeaderMetaPropsInterface {
  created: string;
  updated: string;
}

export const EntryHeaderMeta = (props: EntryHeaderMetaPropsInterface): JSX.Element => {
  const { created, updated } = props;

  return (
    <StyledEntryHeaderMeta>
      {<Label name="entry__created"/>}
      <span>{created}</span>
      {<Label name="entry__last_updated"/>}
      <span>{updated}</span>
    </StyledEntryHeaderMeta>
  );
};

export default EntryHeaderMeta;

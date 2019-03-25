import * as React from 'react';

import { TagInterface } from 'common/types';
import { EntryBackLink } from './components/EntryBackLink';
import { EntryHeaderMeta } from './components/EntryHeaderMeta';
import { EntryHeaderTags } from './components/EntryHeaderTags';
import { EntryHeaderTitle } from './components/EntryHeaderTitle';

interface EntryHeaderPropsInterface {
  title: string;
  titleLink: string;
  tags: TagInterface[];
  created: string;
  updated: string;
  full?: boolean;
}

export const EntryHeader = (props: EntryHeaderPropsInterface): JSX.Element => {
  const { title, titleLink, tags, created, updated, full } = props;

  return (
    <div>
      { full === true && <EntryBackLink/> }
      <EntryHeaderTitle
        title={title}
        link={titleLink}
      />
      <EntryHeaderMeta
        created={created}
        updated={updated}
      />
      <EntryHeaderTags
        tags={tags}
      />
    </div>
  );
};

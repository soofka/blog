import * as React from 'react';

import EntryBackLink from './components/EntryBackLink';
import EntryHeaderTitle from './components/EntryHeaderTitle';
import EntryHeaderMeta from './components/EntryHeaderMeta';
import EntryHeaderTags from './components/EntryHeaderTags';

interface EntryHeaderPropsInterface {
  title: string;
  titleLink: string;
  tags: string[];
  created: string;
  updated: string;
  full: boolean;
}

export const EntryHeader = (props: EntryHeaderPropsInterface): JSX.Element => {
  const { title, titleLink, tags, created, updated, full } = props;

  return (
    <div>
      { full && <EntryBackLink/> }
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

export default EntryHeader;

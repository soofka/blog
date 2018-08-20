import * as React from 'react';

import EntryHeaderTitle from './components/EntryHeaderTitle';
import EntryHeaderMeta from './components/EntryHeaderMeta';
import EntryHeaderTags from './components/EntryHeaderTags';

interface EntryHeaderPropsInterface {
  title: string;
  titleLink: string;
  tags: string[];
  created: string;
  updated: string;
}

export const EntryHeader = (props: EntryHeaderPropsInterface): JSX.Element => {
  const { title, titleLink, tags, created, updated } = props;

  return (
    <div>
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

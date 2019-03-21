import * as React from 'react';
import { Link } from 'react-router-dom';

import { StyledEntryHeaderTags } from './styled';

interface EntryHeaderTagsPropsInterface {
  tags: string[];
}

export const EntryHeaderTags = (props: EntryHeaderTagsPropsInterface): JSX.Element => {
  const { tags } = props;

  // @todo: fix link
  return (
    <StyledEntryHeaderTags>
      {tags.map((tag: string, index: number) => {
        return (
          <Link
            key={index}
            to={''}
          >
            {tag}
          </Link>
        );
      })}
    </StyledEntryHeaderTags>
  );
};

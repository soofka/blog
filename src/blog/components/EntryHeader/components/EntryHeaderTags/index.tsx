import * as React from 'react';
import { Link } from 'react-router-dom';

import { TagInterface } from 'common/types';
import { StyledEntryHeaderTags } from './styled';

interface EntryHeaderTagsPropsInterface {
  tags: TagInterface[];
}

export const EntryHeaderTags = (props: EntryHeaderTagsPropsInterface): JSX.Element => {
  const { tags } = props;

  // @todo: fix link
  return (
    <StyledEntryHeaderTags>
      {tags.map((tag: TagInterface, index: number) => {
        return (
          <Link
            key={index}
            to={''}
          >
            {tag.name}
          </Link>
        );
      })}
    </StyledEntryHeaderTags>
  );
};

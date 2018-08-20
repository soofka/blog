import * as React from 'react';
import { Link } from 'react-router-dom';

import RoutingProvider from 'common/RoutingProvider';

import { StyledEntryHeaderTags } from './styled';

interface EntryHeaderTagsPropsInterface {
  tags: string[];
}

export const EntryHeaderTags = (props: EntryHeaderTagsPropsInterface): JSX.Element => {
  const { tags } = props;

  return (
    <StyledEntryHeaderTags>
      {tags.map((tag: string, index: number) => {
        return (
          <Link
            key={index}
            to={`${RoutingProvider.getEntriesByTagNiceUrlBasePath()}/${RoutingProvider.parseTextToNiceUrl(tag)}`}
          >
            {tag}
          </Link>
        );
      })}
    </StyledEntryHeaderTags>
  );
};

export default EntryHeaderTags;

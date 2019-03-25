import * as React from 'react';
import { Link } from 'react-router-dom';

import { Label } from 'blog/components/Label';

import {
  StyledEntryBriefContainer,
  StyledEntryImage,
  StyledEntryImageWrapper,
} from './styled';

export interface EntryBriefInterface {
  text: string;
  imageUrl?: string;
}

interface EntryBriefPropsInterface extends EntryBriefInterface {
  moreButtonLink?: string;
}

// @todo: fix links
export const EntryBrief = (props: EntryBriefPropsInterface): JSX.Element => {
  const { text, imageUrl, moreButtonLink } = props;

  return (
    <div>
      {imageUrl &&
        <StyledEntryImageWrapper>
          <StyledEntryImage
            src={imageUrl}
          />
        </StyledEntryImageWrapper>
      }
      <StyledEntryBriefContainer dangerouslySetInnerHTML={{ __html: text }} />
      <p>
        {moreButtonLink && <Link to={moreButtonLink}>
          {<Label name="entry__continue_reading"/>} &raquo;
        </Link>}
      </p>
    </div>
  );
};

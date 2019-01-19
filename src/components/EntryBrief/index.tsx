import * as React from 'react';
import { Link } from 'react-router-dom';

import Label from 'components/Label';
import AssetsProvider from 'common/AssetsProvider';

import {
  StyledEntryImageWrapper,
  StyledEntryImage,
  StyledEntryBriefContainer,
} from './styled';

export interface EntryBriefInterface {
  text: string;
  imageFileName?: string;
}

interface EntryBriefPropsInterface extends EntryBriefInterface {
  moreButtonLink?: string;
}

export const EntryBrief = (props: EntryBriefPropsInterface): JSX.Element => {
  const { text, imageFileName, moreButtonLink } = props;
  const imageUrl = AssetsProvider.getEntryImageFilePath(imageFileName);

  return (
    <div>
      {imageFileName &&
        <StyledEntryImageWrapper>
          <StyledEntryImage
            src={imageUrl}
          />
        </StyledEntryImageWrapper>
      }
      <StyledEntryBriefContainer dangerouslySetInnerHTML={{ __html: text }}></StyledEntryBriefContainer>
      <p>
        {moreButtonLink && <Link to={moreButtonLink}>
          {<Label name="entry__continue_reading"/>} &raquo;
        </Link>}
      </p>
    </div>
  );
};

export default EntryBrief;

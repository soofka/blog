import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import AssetsProvider from 'common/AssetsProvider';
import LabelsProvider from 'common/LabelsProvider';

export interface EntryBriefInterface {
  text: string;
  imageFileName?: string;
}

interface EntryBriefPropsInterface extends EntryBriefInterface {
  language: string;
  moreButtonLink?: string;
}

export const EntryBrief = (props: EntryBriefPropsInterface): JSX.Element => {
  const { language, text, imageFileName, moreButtonLink } = props;
  const imageUrl = AssetsProvider.getEntryImageFilePath(imageFileName);

  return (
    <div>
      {imageFileName &&
        <div className="entry-brief--image-container" style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        </div>
      }
      <p>
        {text} {moreButtonLink && <Link to={moreButtonLink}>
          {LabelsProvider.getLabel('entry__continue_reading', language)} &raquo;
        </Link>}
      </p>
    </div>
  );
};

export default EntryBrief;

import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import AssetsProvider from 'common/AssetsProvider';

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
        <div className="entry-brief--image-container" style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        </div>
      }
      <p>
        {text} {moreButtonLink && <Link to={moreButtonLink}>Continue reading &raquo;</Link>}
      </p>
    </div>
  );
};

export default EntryBrief;

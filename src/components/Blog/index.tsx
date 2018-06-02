import * as React from 'react';

import InfoSection from 'components/InfoSection';
import ContentSection from 'components/ContentSection';

import './styles.scss';

export class Blog extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="blog">
        <InfoSection/>
        <ContentSection/>
      </div>
    );
  }
}

export default Blog;

import * as React from 'react';

import InfoSection from 'components/InfoSection';
import ContentSection from 'components/ContentSection';

import './styles.scss';

const Blog = () => {
  return (
    <div className="blog">
      <InfoSection />
      <ContentSection />
    </div>
  );
};

export default Blog;

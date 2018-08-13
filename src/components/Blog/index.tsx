import * as React from 'react';

import InfoSection from 'components/InfoSection';
import ContentSection from 'components/ContentSection';
import { StoreInterface } from 'store';

import './styles.scss';

interface BlogPropsInterface {
  store: StoreInterface;
}

const Blog = (props: BlogPropsInterface) => {
  const { store } = props;
  return (
    <div className="blog">
      <InfoSection store={store} />
      <ContentSection store={store} />
    </div>
  );
};

export default Blog;

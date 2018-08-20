import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'common/theme';
import { StyledBlog } from './styled';

import InfoSection from 'components/InfoSection';
import ContentSection from 'components/ContentSection';

const Blog = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBlog>
        <InfoSection />
        <ContentSection />
      </StyledBlog>
    </ThemeProvider>
  );
};

export default Blog;

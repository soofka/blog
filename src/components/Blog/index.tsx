import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';
import { StyledBlog, StyledBlogContainer } from './styled';

import InfoSection from 'components/InfoSection';
import ContentSection from 'components/ContentSection';

const Blog = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBlog>
        <StyledBlogContainer>
          <InfoSection />
          <ContentSection />
        </StyledBlogContainer>
      </StyledBlog>
    </ThemeProvider>
  );
};

export default Blog;

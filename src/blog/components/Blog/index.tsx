import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'blog/common/theme';
import { StyledBlog } from './styled';

import { Header } from 'blog/components/Header';
import { Main } from 'blog/components/Main';
import { Sidebar } from 'blog/components/Sidebar';

export const Blog = () => (
  <ThemeProvider theme={theme}>
    <StyledBlog>
      <Header />
      <div id="page-wrap">
        <Main />
      </div>
    </StyledBlog>
  </ThemeProvider>
);

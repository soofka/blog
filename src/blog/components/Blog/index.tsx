import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'blog/common/theme';
import { ENTRIES_DESTINATION_PATH } from 'common/constants/paths';
import { StyledBlog } from './styled';

// import Sidebar from 'components/Sidebar';
// import Header from 'components/Header';
// import Main from 'components/Main';

const Blog = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBlog>
        {ENTRIES_DESTINATION_PATH}
        {/*<Header />*/}
        {/*<div id="page-wrap">*/}
          {/*<Main />*/}
        {/*</div>*/}
      </StyledBlog>
    </ThemeProvider>
  );
};

export default Blog;

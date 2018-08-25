import styledComponents from 'styled-components';

export const StyledBlog = styledComponents.div`
  width: 100%;
  height: 100%;
  font-size: ${props => props.theme.baseFontSize};
  line-height: ${props => props.theme.baseLineHeight};
`;

export const StyledBlogContainer = styledComponents.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.theme.siteMaxWidth};
  height: 100%;
  margin: 0 auto;
`;

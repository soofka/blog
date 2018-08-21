import styledComponents from 'styled-components';

export const StyledBlog = styledComponents.div`
  width: 100%;
  height: 100%;
  font-size: ${props => props.theme.baseFontSize};
  line-height: ${props => props.theme.baseLineHeight};
`;

export default StyledBlog;

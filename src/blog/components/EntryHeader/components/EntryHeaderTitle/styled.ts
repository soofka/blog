import styledComponents from 'styled-components';

export const StyledEntryHeaderTitle = styledComponents.h1`
  font-size: ${(props) => props.theme.fontSizeXL};
  line-height: ${(props) => props.theme.lineHeightM};
  margin: ${(props) => props.theme.marginS} 0;
  padding: 0;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.lighterBlue};
    }
  }
`;

export default StyledEntryHeaderTitle;

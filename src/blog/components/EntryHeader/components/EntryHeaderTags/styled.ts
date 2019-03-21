import styledComponents from 'styled-components';

export const StyledEntryHeaderTags = styledComponents.p`
  font-size: ${(props) => props.theme.fontSizeS};
  line-height: ${(props) => props.theme.lineHeightL};
  margin: 0 0 ${(props) => props.theme.marginM} 0;
  padding: 0;

  a {
    display: inline-block;
    margin: ${(props) => props.theme.marginXXS};
    padding: ${(props) => `${props.theme.paddingXS} ${props.theme.paddingS}`};
    background-color: ${(props) => props.theme.darkWhite};
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme.darkerWhite};
      color: ${(props) => props.theme.darkerBlue};
    }
  }
`;

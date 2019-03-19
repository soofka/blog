import styledComponents from 'styled-components';

export const StyledEntryHeaderMeta = styledComponents.p`
  font-size: ${(props) => props.theme.fontSizeS};
  line-height: ${(props) => props.theme.lineHeightS};
  margin: ${
    (props) => `${props.theme.marginS} ${props.theme.marginXXS} ${props.theme.marginM} ${props.theme.marginXXS}`
  };
  padding: 0;
  color: ${(props) => props.theme.lighterBlack};

  span {
    font-weight: bold;
  }
`;

export default StyledEntryHeaderMeta;

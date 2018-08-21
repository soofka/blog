import styledComponents from 'styled-components';

export const StyledLinkIconsBar = styledComponents.ul`
  margin: ${props => props.theme.marginM};
  padding: 0;
  text-align: center;

  li {
    display: inline-block;
    margin: ${props => `${props.theme.marginM} ${props.theme.marginXS}`};
    padding: 0;
    font-size: ${props => props.theme.fontSizeXXL};
    line-height: ${props => props.theme.fontSizeXXL};

    svg {
      width: 40px;
      height: 40px;
      opacity: 0.7;

      &:hover,
      &:active {
        opacity: 1;
      }
    }
  }

  @media (max-width: ${props => props.theme.mobileBreakPointWidth}) {
    float: right;
    margin: ${props => props.theme.marginS} 0;

    li {
      margin: 0 ${props => props.theme.marginXS};
      padding: 0;
      font-size: ${props => props.theme.fontSizeL};
      line-height: ${props => props.theme.fontSizeL};
    }
  }
`;

export default StyledLinkIconsBar;

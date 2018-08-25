import styledComponents from 'styled-components';

export const StyledLinkIconsBar = styledComponents.ul`
  float: right;
  margin: ${props => props.theme.marginM};
  padding: 0;
  text-align: center;

  li {
    display: inline-block;
    margin: ${props => `${props.theme.marginM} ${props.theme.marginXS}`};
    padding: 0;

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
`;

export default StyledLinkIconsBar;

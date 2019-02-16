import styledComponents from 'styled-components';

export const StyledLinkIconsBar = styledComponents.ul`
  position: absolute;
  left: 0;
  bottom 0;
  width: 100%;
  margin: ${props => props.theme.marginM} 0;
  padding: 0;
  text-align: center;

  li {
    display: inline-block;
    padding: 0;

    svg {
      color: ${props => props.theme.white};
      width: ${props => 6 * props.theme.baseDistanceValue}px;
      height: ${props => 6 * props.theme.baseDistanceValue}px;
      
      opacity: 0.7;

      &:hover,
      &:active {
        opacity: 1;
      }
    }
  }
`;

export default StyledLinkIconsBar;

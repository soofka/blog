import styledComponents from 'styled-components';

export const StyledLogo = styledComponents.img`
  float: left;
  margin: ${props => 2 * props.theme.baseDistanceValue}px;
  width: ${props => props.theme.infoSectionHeightValue - 4 * props.theme.baseDistanceValue}px;
  height: auto;
  border-radius: ${props => 4 * props.theme.baseDistanceValue}px;
`;

export default StyledLogo;

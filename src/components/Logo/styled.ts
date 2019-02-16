import styledComponents from 'styled-components';

export const StyledLogoImageContainer = styledComponents.span`
  float: left;
  margin: ${props => props.theme.marginS};
`;

export const StyledLogoImage = styledComponents.img`
  width: ${props => 12 * props.theme.baseDistanceValue}px;
  height: auto;
  border-radius: ${props => 4 * props.theme.baseDistanceValue}px;
  
  @media (max-width: ${props => props.theme.breakpointM}) {
    width: ${props => 8 * props.theme.baseDistanceValue}px;
    border-radius: ${props => 2 * props.theme.baseDistanceValue}px;
  }
`;

export const StyledLogoHeader = styledComponents.h1`
  float: left;
  font-family: ${props => props.theme.headerFontFamily};
  margin: ${props => props.theme.marginXL};
  
  @media (max-width: ${props => props.theme.breakpointM}) {
    margin: ${props => props.theme.marginL};
  }
`;

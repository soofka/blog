import styledComponents from 'styled-components';

export const StyledInfoSection = styledComponents.div`
  position: static;
  display: inline-block;
  width: 100%;
  height: ${props => props.theme.infoSectionHeightValue}px;
  color: ${props => props.theme.darkerWhite};
  background-color: ${props => props.theme.blue};
  box-shadow: ${props => `0 0 ${props.theme.baseDistanceValue}px 0 ${props.theme.darkerBlue}`};

  a {
    color: ${props => props.theme.darkerWhite};
    text-decoration: none;

    &:hover,
    &:active {
      color: ${props => props.theme.white};
    }
  }
`;

export default StyledInfoSection;


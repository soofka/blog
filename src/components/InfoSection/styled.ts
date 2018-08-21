import styledComponents from 'styled-components';

export const StyledInfoSection = styledComponents.div`
  position: fixed;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  width: ${props => props.theme.infoSectionWidth};
  height: auto;
  min-height: 100%;
  padding: ${props => props.theme.paddingS};
  color: ${props => props.theme.darkerWhite};
  background-color: ${props => props.theme.blue};
  box-shadow: ${props => `0 0 ${props.theme.baseDistance}px 0 ${props.theme.darkerBlue}`};

  a {
    color: ${props => props.theme.darkerWhite};
    text-decoration: none;

    &:hover,
    &:active {
      color: ${props => props.theme.white};
    }
  }

  @media (max-width: ${props => props.theme.mobileBreakPointWidth}) {
    position: static;
    display: inline-block;
    width: 100%;
    min-height: 0;
}
`;

export default StyledInfoSection;


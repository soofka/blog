import styledComponents from 'styled-components';

export const StyledContentSection = styledComponents.div`
  float: left;
  margin: 0 0 0 ${props => props.theme.infoSectionWidth};
  padding: ${props => props.theme.paddingM};
  width: 100%;
  height: auto;
  min-height: 100%;
  box-sizing: border-box;
  color: ${props => props.theme.lighterBlack};
  background-color: ${props => props.theme.white};
  box-shadow: ${props => `0 0 ${props.theme.baseDistanceValue}px 0 ${props.theme.white}`};

  a {
    color: ${props => props.theme.lighterBlack};

    &:hover,
    &:active {
      color: ${props => props.theme.black};
    }
  }

@media (max-width: ${props => props.theme.mobileBreakPointWidth}) {
  margin: 0;
  padding: ${props => props.theme.paddingS};
  width: 100%;
}`;

export default StyledContentSection;

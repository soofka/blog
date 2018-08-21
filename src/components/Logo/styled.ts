import styledComponents from 'styled-components';

export const StyledLogo = styledComponents.img`
  display: block;
  margin: ${props => props.theme.marginL} auto;
  padding: 0;
  width: ${props => 28 * props.theme.baseDistance}px;
  height: ${props => 28 * props.theme.baseDistance}px;
  border-radius: ${props => 4 * props.theme.baseDistance}px;

  @media (max-width: ${props => props.theme.mobileBreakPointWidth}) {
    float: left;
    margin: 0;
    padding: 0;
    width: ${props => 8 * props.theme.baseDistance}px;
    height: ${props => 8 * props.theme.baseDistance}px;
    border-radius: ${props => props.theme.baseDistance}px;
  }
`;

export default StyledLogo;

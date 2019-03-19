import styledComponents from 'styled-components';

export const StyledHeader = styledComponents.header`
  position: relative;
  display: inline-block;
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  color: ${(props) => props.theme.darkerWhite};
  background-color: ${(props) => props.theme.blue};
  box-shadow: ${(props) => `0 0 ${props.theme.baseDistanceValue}px 0 ${props.theme.darkerBlue}`};

  a {
    color: ${(props) => props.theme.darkerWhite};
    text-decoration: none;

    &:hover,
    &:active {
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpointM}) {
    height: ${(props) => props.theme.headerHeightMobile};
  }
`;

export default StyledHeader;

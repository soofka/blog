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

// export const StyledInfoSection = styledComponents.div`
//   position: absolute;
//   top: 0;
//   left: -${props => props.theme.infoSectionWidthValue}px;
//   box-sizing: border-box;
//   width: ${props => props.theme.infoSectionWidthValue}px;
//   height: auto;
//   min-height: 100%;
//   padding: ${props => props.theme.paddingS};
//   color: ${props => props.theme.darkerWhite};
//   background-color: ${props => props.theme.blue};
//   box-shadow: ${props => `0 0 ${props.theme.baseDistanceValue}px 0 ${props.theme.darkerBlue}`};
//
//   a {
//     color: ${props => props.theme.darkerWhite};
//     text-decoration: none;
//
//     &:hover,
//     &:active {
//       color: ${props => props.theme.white};
//     }
//   }
//
//   @media (max-width: ${props => props.theme.mobileBreakPointWidth}) {
//     position: static;
//     display: inline-block;
//     width: 100%;
//     height: ${props => props.theme.infoSectionMobileHeightValue}px;
//     min-height: 0;
// }
// `;

export default StyledInfoSection;


import styledComponents from 'styled-components';

export const StyledContentDivider = styledComponents.hr`
  border-color: ${props => props.theme.lighterBlue} !important;
`;

export default StyledContentDivider;

import styledComponents from 'styled-components';

export const StyledHr = styledComponents.hr`
  border-color: ${props => props.theme.lighterBlue} !important;
`;

export default StyledHr;

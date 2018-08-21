import styledComponents from 'styled-components';

export const StyledEntryBrief = styledComponents.div`
  float: left;
  width: 100%;
  height: ${props => 24 * props.theme.baseDistance}px;
  margin: ${props => props.theme.marginS} 0 ${props => props.theme.marginM} 0;
  padding: 0;
  border: 2px solid ${props => props.theme.white};
  outline: 1px solid ${props => props.theme.lighterBlack};
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
`;

export default StyledEntryBrief;

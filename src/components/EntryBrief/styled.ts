import styledComponents from 'styled-components';

export const StyledEntryImageWrapper = styledComponents.div`
  width: 100%;
  overflow: hidden;
  margin: ${props => `${props.theme.marginS} 0 ${props.theme.marginM} 0`};
`;

export const StyledEntryImage = styledComponents.img`
  display: block;
  width: 100%;
  margin-top: -25%;
  margin-bottom: -25%;
`;

export default StyledEntryImageWrapper;

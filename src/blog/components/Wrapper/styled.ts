import styledComponents from 'styled-components';

export const StyledWrapper = styledComponents.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.theme.siteMaxWidth};
  height: 100%;
  margin: 0 auto;
`;

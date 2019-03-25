import styledComponents from 'styled-components';

export const StyledEntry = styledComponents.div`
  margin: ${(props) => props.theme.marginM} 0;
  padding: ${(props) => props.theme.paddingM};
  box-sizing: border-box;
`;

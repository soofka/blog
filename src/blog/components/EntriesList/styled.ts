import styledComponents from 'styled-components';

export const StyledEntryListItem = styledComponents.div`
  margin: ${(props) => props.theme.marginM} 0;
  padding: ${(props) => props.theme.paddingM};
  box-sizing: border-box;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

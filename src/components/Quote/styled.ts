import styledComponents from 'styled-components';

export const StyledQuote = styledComponents.p`
  margin: ${props => props.theme.marginM};
  padding: ${props => props.theme.paddingS};
  font-style: italic;
  text-align: center;

  @media (max-width: ${props => props.theme.mobileBreakPointWidth}) {
    display: none;
  }
`;

export default StyledQuote;

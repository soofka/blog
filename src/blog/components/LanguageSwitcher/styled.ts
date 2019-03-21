import styledComponents from 'styled-components';

export const StyledLanguageSwitcher = styledComponents.ul`
  margin: ${(props) => props.theme.marginM};
  padding: 0;
  text-align: center;

  li {
    display: inline-block;
    margin: ${(props) => props.theme.marginS};

    svg {
      width: 48px;
      height: 27px;
      opacity: 0.5;
      cursor: pointer;

      .active {
        opacity: 0.75;
      }

      &:hover,
      &:active {
        opacity: 1;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpointM}) {
    float: right;
    margin: ${(props) => props.theme.marginS} 0;

    li {
      margin: ${(props) => `${props.theme.marginXS} ${props.theme.marginS}`};
      padding: 0;
    }
  }
`;

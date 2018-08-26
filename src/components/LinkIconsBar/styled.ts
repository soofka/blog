import styledComponents from 'styled-components';

export const StyledLinkIconsBar = styledComponents.ul`
  float: right;
  margin: ${props => props.theme.marginM};
  padding: 0;
  text-align: center;

  li {
    display: inline-block;
    margin: 16px 4px;
    padding: 0;

    svg {
      width: 3em;
      height: 3em;
      
      opacity: 0.7;

      &:hover,
      &:active {
        opacity: 1;
      }
    }
  }
      
  @media (max-width: ${props => props.theme.breakpointM}) {
    li {
      margin: 24px 0px;
    
      svg {  
        width: 2.25em;
        height: 2.25em;
      }
    }
  }
  
  @media (max-width: ${props => props.theme.breakpointS}) {
    display: none;
  }
`;

export default StyledLinkIconsBar;

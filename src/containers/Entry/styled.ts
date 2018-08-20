import styledComponents from 'styled-components';

export const StyledEntry = styledComponents.div`
  margin: ${props => props.theme.marginM} 0;
  padding: ${props => props.theme.paddingM};
  box-sizing: border-box;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: ${props => props.theme.mobileBreakPointWidth}) {
    margin: ${props => props.theme.marginS} 0;
    padding: ${props => props.theme.paddingS};

    blockquote {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

export const StyledEntryContent = styledComponents.div`
  small {
    display: block;
    width: 100%;
    font-size: ${props => props.theme.fontSizeS};
    line-height: ${props => props.theme.fontSizeL};
    margin: 0 0 ${props => props.theme.marginM} 0;
    padding: 0;
    color: ${props => props.theme.gray};

    a {
      color: ${props => props.theme.gray};
      text-decoration: underline;

      &:hover,
      &:active {
        color: ${props => props.theme.gray};
        text-decoration: underline;
      }
    }
  }

  p,
  li {
    font-size: ${props => props.theme.fontSizeL};
    line-height: ${props => props.theme.fontSizeXXL};
    margin: 0 0 ${props => props.theme.marginL} 0;
    padding: 0;
    text-align: justify;

    /* stylelint-disable-next-line */
    a {
      color: ${props => props.theme.blue};

      &:hover,
      &:active {
        color: ${props => props.theme.lighterBlue};
      }
    }
  }

  li {
    margin: 0;
  }

  pre {
    margin: 0;
    padding: 0;
  }

  code {
    float: left;
    width: 100%;
    margin: 0 0 ${props => props.theme.marginL} 0;
    padding: ${props => props.theme.paddingM};
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.darkWhite};
    box-sizing: border-box;
  }

  blockquote {
    color: ${props => props.theme.blue};
    margin: 0 ${props => `${props.theme.marginXL} ${props.theme.marginL} ${props.theme.marginXL}`};
    padding: 0 ${props => props.theme.paddingM};
    font-size: ${props => props.theme.fontSizeXXXL};
    border-left: 4px solid ${props => props.theme.lighterBlue};
    line-height: ${props => props.theme.fontSizeXXXXL};
  }

  img {
    display: block;
    max-width: 100%;
    margin: ${props => props.theme.marginS} auto;
    padding: 0;
    border: 2px solid ${props => props.theme.white};
    outline: 1px solid ${props => props.theme.lighterBlack};
  }

  ul {
    margin: 0;
    padding: 0 0 0 ${props => props.theme.paddingL};
  }

  hr {
    margin: ${props => props.theme.marginXXL};
  }

  .video-container {
    max-width: 800px;
    max-height: 450px;
    margin: ${props => `${props.theme.marginS} auto ${props.theme.marginM} auto`};
    overflow: hidden;
  }

  .video-container--wrapper {
    position: relative;
    padding-top: 24px;
    padding-bottom: 56.25%;
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

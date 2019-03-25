import styledComponents from 'styled-components';

export const StyledMain = styledComponents.main`
  float: left;
  margin: 0 0 0 ${(props) => props.theme.infoSectionWidth};
  padding: ${(props) => props.theme.paddingM};
  width: 100%;
  height: auto;
  min-height: 100%;
  box-sizing: border-box;
  color: ${(props) => props.theme.lighterBlack};
  background-color: ${(props) => props.theme.white};
  box-shadow: ${(props) => `0 0 ${props.theme.baseDistanceValue}px 0 ${props.theme.white}`};

  a {
    color: ${(props) => props.theme.lighterBlack};

    &:hover,
    &:active {
      color: ${(props) => props.theme.black};
    }
  }

  small {
    display: block;
    width: 100%;
    font-size: ${(props) => props.theme.fontSizeS};
    line-height: ${(props) => props.theme.lineHeightS};
    margin: ${(props) => props.theme.marginM} 0;
    padding: 0;
    color: ${(props) => props.theme.gray};

    a {
      color: ${(props) => props.theme.gray};
      text-decoration: underline;

      &:hover,
      &:active {
        color: ${(props) => props.theme.gray};
        text-decoration: underline;
      }
    }
  }

  p,
  li {
    font-size: ${(props) => props.theme.fontSizeM};
    line-height: ${(props) => props.theme.lineHeightL};
    margin: 0 0 ${(props) => props.theme.marginL} 0;
    padding: 0;
    text-align: justify;

    a {
      color: ${(props) => props.theme.blue};

      &:hover,
      &:active {
        color: ${(props) => props.theme.lighterBlue};
      }
    }
  }

  li {
    margin: 0;
  }

  blockquote {
    color: ${(props) => props.theme.blue};
    margin: 0 ${(props) => `${props.theme.marginXL} ${props.theme.marginL} ${props.theme.marginXL}`};
    padding: 0 ${(props) => props.theme.paddingM};
    font-size: ${(props) => props.theme.fontSizeXXXL};
    line-height: ${(props) => props.theme.fontSizeXXXXL};
    border-left: 4px solid ${(props) => props.theme.lighterBlue};

    @media (max-width: ${(props) => props.theme.breakpointM}) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0 0 0 ${(props) => props.theme.paddingL};
  }

  pre code {
    background-color: ${(props) => props.theme.blue};
  }

  hr {
    width: 70%;
    height: 1px;
    margin: ${(props) => props.theme.marginXXL} auto;
    border: 0;
    border-top: 1px solid ${(props) => props.theme.darkerWhite};
  }

  .video-container {
    max-width: 800px;
    max-height: 450px;
    margin: ${(props) => `${props.theme.marginS} auto ${props.theme.marginM} auto`};
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

@media (max-width: ${(props) => props.theme.breakpointM}) {
  margin: 0;
  padding: ${(props) => props.theme.paddingS};
  width: 100%;
}`;

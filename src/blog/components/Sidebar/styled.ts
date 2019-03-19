import styledComponents from 'styled-components';

export const StyledSidebar = styledComponents.div`
  .bm-item {
    display: inline-block;
    margin: 0 0 ${(props) => props.theme.marginM} 0;
    outline: none;
  }

  h3.bm-item {
    margin-bottom: ${(props) => props.theme.marginL};
  }

  a.bm-item:hover {
    color: ${(props) => props.theme.white};
  }

  .bm-burger-button {
    position: absolute;
    top: ${(props) => 4 * props.theme.baseDistanceValue}px;
    right: ${(props) => props.theme.baseDistanceValue}px;
    width: ${(props) => 6 * props.theme.baseDistanceValue}px;
    height: ${(props) => 6 * props.theme.baseDistanceValue}px;

    @media (max-width: ${(props) => props.theme.breakpointM}) {
      top: ${(props) => 3 * props.theme.baseDistanceValue}px;
      width: ${(props) => 4 * props.theme.baseDistanceValue}px;
      height: ${(props) => 4 * props.theme.baseDistanceValue}px;
    }
  }

  .bm-burger-bars {
    background: ${(props) => props.theme.darkerWhite};
  }

  .bm-burger-bars-hover {
    background: ${(props) => props.theme.white};
    opacity: 1 !important;
  }

  .bm-cross-button {
    height: ${(props) => 3 * props.theme.baseDistanceValue}px;
    width: ${(props) => 3 * props.theme.baseDistanceValue}px;
  }

  .bm-cross {
    background: ${(props) => props.theme.white};
  }

  .bm-menu-wrap {
    left: 0;
  }

  .bm-menu {
    background: ${(props) => props.theme.blue};
    padding: ${(props) => props.theme.paddingM};
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #b8b7ad;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    left: 0;
  }
`;

export const StyledSidebarHeader = styledComponents.h3`
  float: left;
  width: 100%;
  box-sizing: border-box;
  padding: ${(props) => props.theme.paddingM};
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.darkBlue};
  font-family: ${(props) => props.theme.headerFontFamily};
`;

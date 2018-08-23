const infoSectionWidthPercentageValue = 32;
const baseDistanceValue = 8;
const baseFontSizeValue = 18;
const baseLineHeightValue = 26;

export const theme = {
  mobileBreakPointWidth: '968px',

  infoSectionWidth: `${infoSectionWidthPercentageValue}%`,
  contentSectionWidth: `${100 - infoSectionWidthPercentageValue}%`,

  blue: 'rgb(0,1,49)',
  darkBlue: 'rgb(0,0,24)',
  darkerBlue: 'rgb(0,0,0)',
  lightBlue: 'rgb(0,2,98)',
  lighterBlue: 'rgb(0,3,147)',

  white: 'rgb(246,246,246)',
  darkWhite: 'rgb(222,222,222)',
  darkerWhite: 'rgb(198,198,198)',

  black: 'rgb(20,20,20)',
  lightBlack: 'rgb(32,32,32)',
  lighterBlack: 'rgb(44,44,44)',

  gray: 'rgb(144,144,144)',

  baseDistance: `${baseDistanceValue}`,

  marginXXS: `${0.25 * baseDistanceValue}px`,
  marginXS: `${0.5 * baseDistanceValue}px`,
  marginS: `${baseDistanceValue}px`,
  marginM: `${2 * baseDistanceValue}px`,
  marginL: `${4 * baseDistanceValue}px`,
  marginXL: `${6 * baseDistanceValue}px`,
  marginXXL: `${8 * baseDistanceValue}px`,

  paddingXXS: `${0.25 * baseDistanceValue}px`,
  paddingXS: `${0.5 * baseDistanceValue}px`,
  paddingS: `${baseDistanceValue}px`,
  paddingM: `${2 * baseDistanceValue}px`,
  paddingL: `${4 * baseDistanceValue}px`,
  paddingXL: `${6 * baseDistanceValue}px`,
  paddingXXL: `${8 * baseDistanceValue}px`,

  baseFontSize: `${baseFontSizeValue}px`,
  baseLineHeight: `${baseLineHeightValue}px`,

  fontSizeS: '0.7em',
  fontSizeM: '1em',
  fontSizeL: '1.25em',
  fontSizeXL: '1.75em',
  fontSizeXXL: '2em',
  fontSizeXXXL: '4em',
  fontSizeXXXXL: '6em',

  lineHeightS: '1em',
  lineHeightM: '1.75em',
  lineHeightL: '3em',
  lineHeightXL: '4em',
};

export default theme;

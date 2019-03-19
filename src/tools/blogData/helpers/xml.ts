import * as xml2js from 'xml2js';

export const getXmlParser = () => new xml2js.Parser({
  trim: true,
  explicitRoot: false,
  explicitArray: false,
});

export const getXmlBuilder = (rootName: string = 'rss') => new xml2js.Builder({
  rootName,
  trim: true,
});

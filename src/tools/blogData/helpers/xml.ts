import * as xml2js from 'xml2js';

export const getXmlParser = (): xml2js.Parser => new xml2js.Parser({
  trim: true,
  explicitRoot: false,
  explicitArray: false,
});

export const getXmlBuilder = (rootName: string = 'rss'): xml2js.Builder => new xml2js.Builder({
  rootName,
  trim: true,
});

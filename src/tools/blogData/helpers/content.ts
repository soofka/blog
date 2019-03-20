import * as path from 'path';

// import {
//   ContentFileType,
//   Environment,
// } from '../../types';
import {
  createDirectory,
  doesDirectoryExist,
  forceCreateDirectory,
  getFileContent,
  getFileNamesInDirectory,
  saveFile,
  saveDataFile,
  replaceInStringBasedOnMap,
} from './';
import { isObject } from 'common/helpers/index';
import { getXmlParser } from './xml';
// import { Language } from '../../../common/types';
// import {
//   IContentData,
//   IContentDataRaw,
//   IContentVersions,
// } from './types';
import {
  IMAGES_DIRECTORY_NAME,
  SLIDES_DIRECTORY_NAME,
} from '../../../common/constants';
import { parseTextToNiceUrl } from '../../../common/helpers';

export const CONTENT_TO_HTML_MAP = new Map([
  ['<youtube-video>', '<div class="video-container"><div class="video-container--wrapper">'],
  ['</youtube-video>', '</div></div>'],
  ['<codeblock>', '<pre><code>'],
  ['</codeblock>', '</code></pre>'],
  ['<a origin="local/slides" href="', `<a href="/${SLIDES_DIRECTORY_NAME}/`],
  ['<img origin="local" src="', `<img src="/${IMAGES_DIRECTORY_NAME}/`],
]);

const STANDARD_CONTENT_TO_XML_MAP_ELEMENTS = ['brief', 'content'];
const CONTENT_FILE_EXTENSION = 'html';

export const createContentFiles = (
  sourceDirectoryPath: string,
  destinationDirectoryPath: string,
  contentType,
  environment,
  formatContentData: (
    contentDataRaw,
    contentFileName?: string,
  ) => any,
  entryToXmlMapElements?: string[],
) => {
  const contents = {};

  forceCreateDirectory(destinationDirectoryPath);

  getFileNamesInDirectory(sourceDirectoryPath).forEach((contentFileName: string) => {
    const contentRaw = getFileContent(path.join(sourceDirectoryPath, contentFileName));
    const contentXml = parseContentToXml(contentRaw, entryToXmlMapElements);

    getXmlParser().parseString(contentXml, (error, contentDataRaw) => {
      if (
        !error
        && contentDataRaw.hasOwnProperty('version')
        && contentDataRaw.version
      ) {
        if (isObject(contentDataRaw.version)) {
          contentDataRaw.version = [contentDataRaw.version as any];
        }
        const contentData = formatContentData(contentDataRaw, contentFileName);

        if (contentData && (contentData.meta.public || environment === 'dev')) {
          let language;

          for (language in contentData.versions) {
            const { content, ...restOfVersionData } = contentData.versions[language];

            const contentVersionData = {
              ...contentData.meta,
              ...restOfVersionData,
            };

            if (!contents.hasOwnProperty(language)) {
              contents[language] = [];
            }
            contents[language].push(contentVersionData);

            if (content && restOfVersionData.contentFileName) {
              const fullDestinationDirectoryPath = path.join(destinationDirectoryPath, language);
              if (!doesDirectoryExist(fullDestinationDirectoryPath)) {
                createDirectory(fullDestinationDirectoryPath);
              }
              saveFile(
                path.join(fullDestinationDirectoryPath, restOfVersionData.contentFileName),
                parseContentToHtml(content),
              );
            }
          }
        }
      }
    });
  });

  Object.keys(contents).forEach((language) => {
    saveDataFile(destinationDirectoryPath, contents[language], contentType, language);
  });

  return contents;
};

export const generateContentFileName = (base: string): string =>
  `${parseTextToNiceUrl(base)}.${CONTENT_FILE_EXTENSION}`;

const parseContentToHtml = (content: string): string => replaceInStringBasedOnMap(content, CONTENT_TO_HTML_MAP);

const parseContentToXml = (content: string, mapElements: string[] = []): string => replaceInStringBasedOnMap(
  content,
  createContentToXmlMap([...STANDARD_CONTENT_TO_XML_MAP_ELEMENTS, ...mapElements]),
);

const createContentToXmlMap = (elements: string[]): Map<string, string> => new Map(
  elements
    .filter((value, index, self) => self.indexOf(value) === index)
    .reduce(
      (elementsMapped: string[][], element: string) => [
        ...elementsMapped,
        [`<${element}>`, `<${element}><![CDATA[`],
        [`</${element}>`, `]]></${element}>`],
      ],
      [],
    ) as any,
);

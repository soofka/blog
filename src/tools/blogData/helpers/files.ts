import { Language } from 'common/types';
import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import { ContentFileExtension, ContentFileType } from './content';

export const saveDataFile = (
  destinationDirectoryPath: string,
  data: {} | string,
  language: Language = undefined,
  contentFileType: ContentFileType,
  contentFileExtension: ContentFileExtension = 'json',
): void => {
  const fileName = `${language ? `${contentFileType}.${language}` : contentFileType}.${contentFileExtension}`;
  saveFile(
    path.join(destinationDirectoryPath, fileName),
    contentFileExtension === 'json' ? JSON.stringify(data) : data as string,
  );
};

export const saveFile = (filePath: string, data: string): void =>
  fs.writeFileSync(filePath, data);

export const getFileContent = (filePath: string): string =>
  fs.readFileSync(filePath).toString();

export const createDirectory = (directoryPath: string): void =>
  fs.mkdirSync(directoryPath);

export const getFileNamesInDirectory = (directoryPath: string): string[] =>
  doesDirectoryExist(directoryPath) ? fs.readdirSync(directoryPath) : [];

export const deleteDirectoryRecursively = (directoryPath: string): void =>
  rimraf.sync(directoryPath);

export const doesDirectoryExist = (directoryPath: string): boolean =>
  fs.existsSync(directoryPath);

export const forceCreateDirectory = (directoryPath: string): void => {
  if (doesDirectoryExist(directoryPath)) {
    deleteDirectoryRecursively(directoryPath);
  }
  createDirectory(directoryPath);
};

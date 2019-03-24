import { ARCHIVE_DESTINATION_PATH } from 'common/constants';
import { Language } from 'common/types';
import { EntriesInterface, EntryInterface } from './entries';
import { forceCreateDirectory, saveDataFile } from './helpers';

export interface ArchiveItemInterface {
  id: string;
  title: string;
  niceUrl: string;
  created: string;
}

export interface ArchiveInterface extends Array<ArchiveItemInterface> {}

export const createArchiveFiles = (entries: EntriesInterface) => {
  createArchiveDestinationDirectory();

  Object.keys(entries).forEach((language: Language) => {
    const archive = [];

    entries[language].forEach((entry: EntryInterface) => {
      archive.push(getArchiveFromEntry(entry));
    });

    saveArchiveFile(archive, language);
  });
};

const getArchiveFromEntry = (entry: EntryInterface): ArchiveItemInterface => ({
  id: entry.id,
  title: entry.title,
  niceUrl: entry.niceUrl,
  created: entry.created,
});

const createArchiveDestinationDirectory = (): void =>
  forceCreateDirectory(ARCHIVE_DESTINATION_PATH);

const saveArchiveFile = (archive: ArchiveInterface, language: Language): void =>
  saveDataFile(ARCHIVE_DESTINATION_PATH, archive, language, 'archive');

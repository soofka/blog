import { ARCHIVE_DESTINATION_PATH } from 'common/constants';
import { ArchiveInterface, ArchiveItemInterface, EntriesInterface, EntryInterface, Language } from 'common/types';
import { forceCreateDirectory, saveDataFile } from './helpers';

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

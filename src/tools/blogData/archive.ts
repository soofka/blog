import { ARCHIVE_DESTINATION_PATH } from 'common/constants';
import { ArchiveInterface, ArchivesInterface, EntriesInterface, EntryInterface, Language } from 'common/types';
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

const getArchiveFromEntry = (entry: EntryInterface): ArchiveInterface => ({
  id: entry.id,
  title: entry.title,
  niceUrl: entry.niceUrl,
  created: entry.created,
});

const createArchiveDestinationDirectory = (): void =>
  forceCreateDirectory(ARCHIVE_DESTINATION_PATH);

const saveArchiveFile = (archive: ArchivesInterface, language: Language): void =>
  saveDataFile(ARCHIVE_DESTINATION_PATH, archive, language, 'archive');

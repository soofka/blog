import { ARCHIVE_DESTINATION_PATH } from 'common/constants';
import { forceCreateDirectory, saveDataFile } from './helpers';

export const createArchiveFiles = (entries) => {
  createArchiveDestinationDirectory();

  Object.keys(entries).forEach((language) => {
    const archive = [];

    entries[language].forEach((entry) => {
      archive.push(getArchiveFromEntry(entry));
    });

    saveArchiveFile(archive, language);
  });
};

const getArchiveFromEntry = (entry) => ({
  id: entry.id,
  title: entry.title,
  niceUrl: entry.niceUrl,
  created: entry.created,
});

const createArchiveDestinationDirectory = () =>
  forceCreateDirectory(ARCHIVE_DESTINATION_PATH);

const saveArchiveFile = (archive, language) =>
  saveDataFile(ARCHIVE_DESTINATION_PATH, archive, 'archive', language);

import { GENERATED_CONTENT_PATH } from 'common/constants';
import { createArchiveFiles } from './blogData/archive';
import { createEntriesFiles } from './blogData/entries';
import { createFeedFiles } from './blogData/feed';
import { forceCreateDirectory } from './blogData/helpers';
import { createManifestFile } from './blogData/manifest';
import { createTagsFiles } from './blogData/tags';
import { createTalksFiles } from './blogData/talks';

export const buildBlogData = (environment): void => {
  createRootDestinationDirectory();
  createManifestFile();

  const entries = createEntriesFiles(environment);
  const talks = createTalksFiles(environment);

  createArchiveFiles(entries);
  createFeedFiles(entries);
  createTagsFiles(entries, talks);
};

const createRootDestinationDirectory = (): void => {
  forceCreateDirectory(GENERATED_CONTENT_PATH);
};

buildBlogData(process.env.env);

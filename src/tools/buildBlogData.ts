import { GENERATED_CONTENT_PATH } from '../common/constants';
import { forceCreateDirectory } from './blogData/helpers';
import { createManifestFile } from './blogData/manifest';
import { createEntriesFiles } from './blogData/entries';
import { createArchiveFiles } from './blogData/archive';
import { createTalksFiles } from './blogData/talks';
import { createFeedFiles } from './blogData/feed';
import { createTagsFiles } from './blogData/tags';

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

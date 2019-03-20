import { BLOG_CONFIG, MANIFEST_DESTINATION_PATH } from 'common/constants';
import { saveDataFile } from './helpers';

export const createManifestFile = () =>
  saveManifestFile({
    name: BLOG_CONFIG.title,
    short_name: BLOG_CONFIG.title,
    start_url: '/',
    display: 'standalone',
    background_color: BLOG_CONFIG.themeColor,
    theme_color: BLOG_CONFIG.themeColor,
    description: BLOG_CONFIG.description,
    icons: BLOG_CONFIG.icons.map((icon) => ({
      sizes: `${icon.width}x${icon.height}`,
      type: `image/${icon.url.substr(icon.url.lastIndexOf('.') + 1)}`,
      src: icon.url,
    })),
  });

export const saveManifestFile = (manifest) =>
  saveDataFile(MANIFEST_DESTINATION_PATH, manifest, 'manifest');

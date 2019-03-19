import {saveDataFile} from "./common";
import {blogConfig, MANIFEST_DESTINATION_PATH} from "../../common/constants";

export const createManifestFile = () =>
  saveManifestFile({
    name: blogConfig.title,
    short_name: blogConfig.title,
    start_url: '/',
    display: 'standalone',
    background_color: blogConfig.themeColor,
    theme_color: blogConfig.themeColor,
    description: blogConfig.description,
    icons: blogConfig.icons.map((icon) => ({
      sizes: `${icon.width}x${icon.height}`,
      type: `image/${icon.url.substr(icon.url.lastIndexOf('.') + 1)}`,
      src: icon.url,
    })),
  });

export const saveManifestFile = (manifest) =>
  saveDataFile(MANIFEST_DESTINATION_PATH, manifest, 'manifest');

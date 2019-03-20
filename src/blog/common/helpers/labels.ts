import { DEFAULT_LANGUAGE } from '/common/constants/index';
import { isObject } from '/common/helpers/index';
import labels from '/blog/common/labels';

interface LabelParamsInterface {
  [s: string]: string;
}

export const getLabel = (
  key: string,
  params: LabelParamsInterface = {},
  language: string = DEFAULT_LANGUAGE,
): string => {
  const label = labels[language][key];

  if (label) {
    return replaceInLabel(labels[language][key], params);
  }

  console.log(`Label key ${key} in language ${language} not found.`);
  return key;
};

const replaceInLabel = (label: string, params: LabelParamsInterface): string => {
  let newLabel = label;

  if (isObject(params)) {
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        newLabel = newLabel.replace(`%${key}%`, params[key]);
      }
    }
  }

  return newLabel;
};

import labels from './labels';
import { defaultLanguage } from 'common/LanguageHandler/constants';

export class LabelsProvider {
  static getLabel(key: string, params: any = {}, language: string = defaultLanguage): string {
    const label = labels[language][key];

    if (label) {
      return LabelsProvider.replaceInLabel(labels[language][key], params);
    }

    console.log(`Label key ${key} in language ${language} not found.`);
    return key;
  }

  static replaceInLabel(label: string, params: any): string {
    if (params && Object.keys(params).length) {
      let newLabel = label;

      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          newLabel = newLabel.replace(`%${key}%`, params[key]);
        }
      }

      return newLabel;
    }

    return label;
  }
}

export default LabelsProvider;

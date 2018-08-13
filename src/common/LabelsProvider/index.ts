import labels from './labels';

export class LabelsProvider {
  static getLabel(key: string, language: string): string {
    return labels[language][key];
  }
}

export default LabelsProvider;

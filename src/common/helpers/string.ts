export const parseTextToNiceUrl = (text: string): string =>
  text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[!|?|.|,|:|;|"|'|(|)|{|}|\[|\]|\\|\/]/g, '');

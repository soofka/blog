export const removeNonDigitCharactersFromDateString = (date: string): string =>
  date.replace(/((?![0-9]).)*/g, '');

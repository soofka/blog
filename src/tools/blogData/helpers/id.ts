import { removeNonDigitCharactersFromDateString } from 'common/helpers';

export const generateIdBasedOnDateString = (date: string): string =>
  removeNonDigitCharactersFromDateString(date);

export const generateIdBasedOnCharacters = (text: string): string => {
  let sum = 0;
  const length = text.length;

  for (let i = 0; i < length; i++) {
    sum += text.charCodeAt(i);
  }

  let encodedNumber = sum * ((text.charCodeAt(0) + text.charCodeAt(length - 1)) / length);
  const maxInt = 65535;

  while (encodedNumber > maxInt) {
    encodedNumber /= length;
  }

  return (Math.round(encodedNumber)
    .toString(16) as any)
    .padStart(4, '0');
};

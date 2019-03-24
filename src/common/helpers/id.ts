import { removeNonDigitCharactersFromDateString } from 'common/helpers';

const ID_BASED_ON_DATE_STRING_LENGTH = 8;
const ID_BASED_ON_CHARACTERS_LENGTH = 4;

export const generateIdBasedOnDateString = (date: string): string =>
  (removeNonDigitCharactersFromDateString(date) as any).padStart(ID_BASED_ON_DATE_STRING_LENGTH, '0');

export const isIdGeneratedBasedOnDateString = (potentialId: string): boolean =>
  new RegExp(`^[0-9]{${ID_BASED_ON_DATE_STRING_LENGTH}}$`).test(potentialId);

export const generateIdBasedOnCharacters = (text: string): string => {
  let sum = 0;
  const length = text.length;

  for (let i = 0; i < length; i += 1) {
    sum += text.charCodeAt(i);
  }

  let encodedNumber = sum * ((text.charCodeAt(0) + text.charCodeAt(length - 1)) / length);
  const maxInt = 65535;

  while (encodedNumber > maxInt) {
    encodedNumber /= length;
  }

  return (Math.round(encodedNumber)
    .toString(16) as any)
    .padStart(ID_BASED_ON_CHARACTERS_LENGTH, '0');
};

export const isIdGeneratedBasedOnCharacters = (potentialId: string): boolean =>
  new RegExp(`^[a-fA-F0-9]{${ID_BASED_ON_CHARACTERS_LENGTH}}$`).test(potentialId);

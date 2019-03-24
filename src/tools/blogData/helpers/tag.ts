import { TagInterface } from 'common/types';
import { generateIdBasedOnCharacters } from './';

export const parseTagToTagObject = (tag: string): TagInterface => {
  const id = generateIdBasedOnCharacters(tag);
  return {
    id,
    url: `/${id}`,
    name: tag,
  };
};

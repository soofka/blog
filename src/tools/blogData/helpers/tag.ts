import { generateIdBasedOnCharacters } from 'common/helpers';
import { TagInterface } from 'common/types';

export const parseTagToTagObject = (tag: string): TagInterface => {
  const id = generateIdBasedOnCharacters(tag);
  return {
    id,
    url: `/${id}`,
    name: tag,
  };
};

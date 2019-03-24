import { generateIdBasedOnCharacters } from './';

export interface TagInterface {
  id: string;
  url: string;
  name: string;
}

export const parseTagToTagObject = (tag: string): TagInterface => {
  const id = generateIdBasedOnCharacters(tag);
  return {
    id,
    url: `/${id}`,
    name: tag,
  };
};

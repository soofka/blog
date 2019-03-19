import { generateIdBasedOnCharacters } from "./";

export const parseTagToTagObject = (tag: string) => {
  const id = generateIdBasedOnCharacters(tag);
  return {
    id,
    url: `/${id}`,
    name: tag,
  };
};

export const replaceInStringBasedOnMap = (originalString: string, map: Map<string, string>): string => {
  let resultString = originalString;

  map.forEach((value: string, key: string) => {
    resultString = resultString.split(key).join(value);
  });

  return resultString;
};

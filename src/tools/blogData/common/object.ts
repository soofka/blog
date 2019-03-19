export const isObject = (potentialObject: any): boolean =>
  typeof potentialObject === 'object'
  && !Array.isArray(potentialObject)
  && potentialObject !== null;

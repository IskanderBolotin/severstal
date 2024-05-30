export const isDefined = <T>(v: T) => v !== null && v !== undefined; 

export const isDefinedString = <T extends string>(v: T) => {
  return isDefined(v) && typeof v === 'string' && v.trim().length !== 0;
};

export const isDefinedObject = <T extends {}>(v: T) => {
  return isDefined(v) && typeof v === 'object';
};  

export const isDefinedArray = <T>(v: T[]) => {
  return isDefinedObject(v) && Array.isArray(v) && !!v.length;
};

export const isDefinedFn = (v: any) => {
  return isDefined(v) && typeof v === 'function';
};
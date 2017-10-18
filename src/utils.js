export const prettyPrint = string => string.split(' ').map(word => word.split('').map((letter, i) => {
  if (i) { return letter; }
  return letter.toUpperCase();
}).join('')).join(' ');

export default {};

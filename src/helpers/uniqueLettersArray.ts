export const uniqueLettersArray = (text: string): Array<string> => {
  return Array.from(new Set(text.toLowerCase().match(/[a-z]/g)));
};

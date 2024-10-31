export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatString = str => {
  return str.replace(/([0-9.]+)([a-zA-Z]+)/, '$1 $2');
};

export const formatWord = str => {
  const formattedWord = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return formattedWord.charAt(0).toUpperCase() + formattedWord.slice(1);
};

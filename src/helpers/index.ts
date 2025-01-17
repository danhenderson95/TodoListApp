// NOTE: this is typically where I'd keep general-purpose
// utility functions

export const generateRandomNumber = (): number => {
  return Math.floor(Math.random() * 9999999) + 1;
};

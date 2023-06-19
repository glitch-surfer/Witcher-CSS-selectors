export const getAsideState = (): Record<string, string> => {
  const asideState = localStorage.getItem('asideState');
  if (asideState !== null) {
    return JSON.parse(asideState);
  }
  return {};
};

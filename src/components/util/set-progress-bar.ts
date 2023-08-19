export const setProgressBar = (
  currentLevel: number,
  maxlevel: number,
  element: HTMLElement,
): void => {
  const progressBar = element;
  progressBar.style.width = `${((currentLevel + 1) / maxlevel) * 100}%`;
};

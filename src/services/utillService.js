export const isObjectEmpty = (obj) =>
  obj && Object.keys(obj).length === 0 && obj.construcor === Object;

export const twoDigits = (num) => String(num).padStart(2, '0');
export const oneDigits = (num) => parseInt(num / 10, 10);

export const waitFor = (delay) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, delay));

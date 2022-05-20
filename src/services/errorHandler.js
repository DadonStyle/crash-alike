export const errorHandler = (err) => {
  debugger;
  if (typeof err === 'object') {
    console.log(err);
    const errResponse = err[Object.keys(err)[0]];
    return errResponse;
  }
  if (Object.prototype.toString.call(err) === '[object Array]') {
    console.log(err);
    const errResponse = err[0];
    return errResponse;
  }
  return err;
};

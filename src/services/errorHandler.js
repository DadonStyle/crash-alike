
export const errorHandler = (err) => {
    if (typeof err === 'object') {
        console.log(err)
        const errResponse = err[Object.keys(err)[0]];
        return errResponse;
    }
    if (typeof err === 'array') {
        console.log(err)
        const errResponse = err[0];
        return errResponse;
    }
    return err;
}
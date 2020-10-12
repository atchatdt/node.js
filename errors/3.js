const myObject = {};
Error.captureStackTrace(myObject);
console.log(myObject.stack)
var hi = Promise.resolve('HELLO THERE');
var bye = Promise.reject('GOODBYE');

hi.then(console.log);
// bye.then(null, console.log);
bye.catch(console.log);
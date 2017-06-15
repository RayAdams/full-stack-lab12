function attachTitle(name){
    return 'DR. ' + name;
}

var p = Promise.resolve('MANHATTAN');

// p.then(function(success) {
//     return attachTitle(success);
// }).then(function(fullName){
//   console.log(fullName); 
// });

p.then(attachTitle).then(console.log);
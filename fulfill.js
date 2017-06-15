function promise(){
    return new Promise ( function(fulfill, reject){
        setTimeout(function() {
            fulfill("FULFILLED!");
            }, 300);
        });
}

promise()
    .then(function (success){
        console.log(success);
    });


//alt way to finish:   promise.then(console.log);
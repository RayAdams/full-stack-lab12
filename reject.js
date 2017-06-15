var p = new Promise( function (resolve, reject){
    setTimeout(function() {
       var e = new Error("REJECTED!");
    }, 300);
});

function onReject(err){
    console.log(err.message);
}

p.then(null, onReject);
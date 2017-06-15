function time() {
    return new Promise( function(resolve, reject) {
        setTimeout(function() {
                console.log('TIMED OUT!');
            }, 300);
    });
}

time();
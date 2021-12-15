var http = require('http'); 

function startKeepAlive() {
    setInterval(function() {
        var options = {
            host: 'random-blogging-app.herokuapp.com',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log(res.statusCode);
                    // console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }, 20*15 * 1000); // load every 5 minutes
}

startKeepAlive();
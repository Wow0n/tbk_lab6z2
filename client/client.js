let http = require('http');
let options = {
    host: 'server',
    port: 9000,
    path: '/test'
};

let req = http.get(options, function (res) {
    console.log('STATUS: ' + res.statusCode);

    let bodyChunks = [];
    res.on('data', function (chunk) {
        bodyChunks.push(chunk);
    }).on('end', function () {
        console.log('BODY: ' + Buffer.concat(bodyChunks));
    })
});

req.on('error', function (e) {
    console.log('ERROR: ' + e.message);
});
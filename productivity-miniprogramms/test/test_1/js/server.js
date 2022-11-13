const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    if (req.url === '/') {
        res.write('moin');
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...')
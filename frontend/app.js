const http = require('http');

const server = http.createServer((req, res) => {
    console.log('testing');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

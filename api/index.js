import http from 'http';
import socketIO from 'socket.io';

const server = http.createServer((req, res) => {
    res.write('hello world');
    res.end();
});

const io = socketIO(server);

io.on('connection', socket => {
    console.log('someone is connected');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

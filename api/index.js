import http from 'http';
import socketIO from 'socket.io';

const server = http.createServer((req, res) => {
    res.write('hello world');
    res.end();
});

const io = socketIO(server, {
    pingTimeout: 60000,
});

io.on('connection', socket => {
    console.log('someone is connected');

    socket.emit('connected', 'test emit');

    socket.on('disconnect', () => {
        console.log('someone has disconnected');
    });
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

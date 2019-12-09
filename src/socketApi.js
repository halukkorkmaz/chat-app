const socketio = require('socket.io');
const socketAuthorization = require('../middleware/socketAuthorization');
const io = socketio();

const socketApi = {
    io: io
};

// Socket authorization
io.use(socketAuthorization);

/**
 * Redis adapter
 * Amaç birden fazla server kullanıldığı durumda
 * bir server lokalinde kalmayıp diper sunuculara da
 * yayının yapılması sağlanır.
 * 3000 portu ve 3002 port örneği.
 * socket bağlantılarını tek bir redis server
 * üzerinden senkronize etmek.
 */


const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({
    host: process.env.REDIS_URI,
    port: process.env.REDIS_PORT
}));

io.on('connection', socket => {
    console.log('a user logged in with name ' + socket.request.user.name);

    socket.broadcast.emit('hello');
});

module.exports = socketApi;
const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);

const redisClient = redis.createClient();

module.exports = new redisStore({
    client: redisClient,
    host: process.env.REDIS_URI,
    port: process.env.REDIS_PORT,
    pass: process.env.REDIS_PASS
});

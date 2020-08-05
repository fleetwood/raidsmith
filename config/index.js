require('dotenv').config()

const google = require('./google.json');
const server = {
    host: process.env.HOST || 'localhost'
    , port: process.env.PORT || 8080
    , env: process.env.env || 'development'
}
const pg = {
    host: process.env.DB_HOST
    , port: process.env.DB_PORT
    , db: process.env.DB_NAME
    , login: process.env.DB_LOGIN
    , secret: process.env.DB_SECRET
    , logQuery: process.env.DB_LOG_QUERY
}

module.exports = {
    auth: {
        google: google.web
    }
    , pg
    , server
}
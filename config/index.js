require('dotenv').config()

const google = require('./google.json');
const server = {
    host: process.env.HOST || 'localhost'
    , port: process.env.PORT || '8080'
}

module.exports = {
    auth: {
        google: google.web
    }
    , server
}
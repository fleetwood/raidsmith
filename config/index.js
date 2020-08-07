require('dotenv').config();
const os = require('os');
const utils = require('./../utils');
const { google } = require('googleapis');
const googleConfig = require('./google.json');

const server = {
    host: 'localhost'
    , port: process.env.PORT || 8080
    , env: process.env.env || 'stage'
}

const pg = {
    host: process.env.DB_HOST
    , port: process.env.DB_PORT
    , db: process.env.DB_NAME
    , login: process.env.DB_LOGIN
    , secret: process.env.DB_SECRET
    , logQuery: process.env.DB_LOG_QUERY
}

const googleAuth = new google.auth.OAuth2(
    googleConfig.web.client_id
    , googleConfig.web.client_secret
    , process.env.GOOGLE_AUTH_REDIRECT
);

const isDev = server.env == 'development' || server.env == 'dev';
const isProd = server.env == 'prod' || server.env == 'production';

module.exports = {
    auth: {
        google: googleConfig.web
    }
    , googleAuth
    , pg
    , server
    , isDev
    , isProd
}
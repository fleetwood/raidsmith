const { google } = require('googleapis');
const plus = google.plus('v1');
const { auth, server } = require('../config');
const isDev = server.env == 'development';
let app;

const oAuth2Client = new google.auth.OAuth2(
    auth.google.client_id
    , auth.google.client_secret
    , auth.google.redirect_uris[isDev ? 1 : 0]
);
var referrer = '/';

const getUser = () => new Promise((resolve, reject) => {
    if (app.authUser) {
        resolve(app.authUser);
    }
    plus.people.get({
        userId: 'me',
        auth: oAuth2Client
    }, function (err, response) {
        if (err) {
            reject(err);
        }
        resolve(response);
    });
});

const googleAuth = (req, res, next) => {
    if (!app.authUser) {
        // Generate an OAuth URL and redirect there
        const url = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/gmail.readonly'
        });
        referrer = req.originalUrl;
        res.redirect(url);
    }
}

const googleCallback = (req, res, next) => {
    const code = req.query.code
    referrer = referrer == '/auth' ? "/" : referrer;
    const done = () => res.redirect(referrer);
    if (code) {
        // Get an access token based on our OAuth code
        oAuth2Client.getToken(code, function (err, tokens) {
            if (err) {
                console.log('Error authenticating')
                console.log(err);
                done();
            } else {
                console.log('Successfully authenticated');
                oAuth2Client.setCredentials(tokens);
                getUser()
                    .then(user => {
                        app.authUser = user;
                        done();
                    })
                    .catch(e => {
                        console.log(e.message);
                        done();
                    })
            }
        });
    }
}

const init = (instance) => {
    app = instance;
    app.get('/auth', (req, res, next) => googleAuth(req, res, next))
    app.get('/auth/google/callback', (req, res, next) => googleCallback(req, res, next))
}

module.exports = {
    googleAuth
    , googleCallback
    , getUser
    , init
}
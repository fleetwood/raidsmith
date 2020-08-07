const { google } = require('googleapis');
const gmail = google.gmail('v1');
const moment = require('moment');
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
    gmail.users.getProfile({
            userId: 'me',
            auth: oAuth2Client
        }, (err, response) => {
        try {
            resolve(response.data);
        }
        catch(e) {
            reject(err || e);
        }
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
    else {
        next();
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
                console.log(moment(tokens.expiry_date));
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
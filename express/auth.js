const { google } = require('googleapis');
const gmail = google.gmail('v1');
const moment = require('moment');
const { googleAuth } = require('../config');
let app;
var referrer = '/';

const getUser = () => new Promise((resolve, reject) => {
    if (app.authUser) {
        resolve(app.authUser);
    }
    gmail.users.getProfile({
            userId: 'me',
            auth: googleAuth
        }, (err, response) => {
        try {
            app.authUser = response.data;
            resolve(app.authUser);
        }
        catch(e) {
            reject(err || e);
        }
    });
});

const googleAuthenticate = (req, res, next) => {
    if (!app.authUser) {
        // Generate an OAuth URL and redirect there
        const url = googleAuth.generateAuthUrl({
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
        googleAuth.getToken(code, function (err, tokens) {
            if (err) {
                console.log('Error authenticating')
                console.log(err);
                done();
            } else {
                console.log('Successfully authenticated');
                googleAuth.setCredentials(tokens);
                console.log(moment(tokens.expiry_date));
                getUser()
                    .then(user => {
                        //todo: log user to db, prolly needs a controller
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

const authInit = (instance) => {
    app = instance;
    app.get('/auth', (req, res, next) => googleAuthenticate(req, res, next))
    app.get('/auth/google/callback', (req, res, next) => googleCallback(req, res, next))
}

module.exports = {
    googleAuthenticate
    , googleCallback
    , getUser
    , authInit
}
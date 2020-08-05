const { google } = require('googleapis');
const { auth, server } = require('./../../config');
const isDev = server.env == 'development';

const oAuth2Client = new google.auth.OAuth2(
	auth.google.client_id
	, auth.google.client_secret
	, auth.google.redirect_uris[isDev ? 1 : 0]
);
var authed = false;
var referrer = '/';

const googleAuth = (req, res, next) => {
    if (!authed) {
        // Generate an OAuth URL and redirect there
        const url = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/gmail.readonly'
        });
        console.log(url)
        referrer = req.originalUrl;
        res.redirect(url);
    } else {
        const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
        gmail.users.labels.list({
            userId: 'me',
        }, (err, res) => {
            if (err) return console.log('The API returned an error: ' + err);
            const labels = res.data.labels;
            // if (labels.length) {
            //     console.log('Labels:');
            //     labels.forEach((label) => {
            //         console.log(`- ${label.name}`);
            //     });
            // } else {
            //     console.log('No labels found.');
            // }
        });
        next()
    }
}

const googleCallback = (app) => {
    app.get('/auth/google/callback', function (req, res, next) {
        const code = req.query.code
        if (code) {
            // Get an access token based on our OAuth code
            oAuth2Client.getToken(code, function (err, tokens) {
                if (err) {
                    console.log('Error authenticating')
                    console.log(err);
                } else {
                    console.log('Successfully authenticated');
                    oAuth2Client.setCredentials(tokens);
                    authed = true;
                    res.redirect(referrer)
                }
            });
        }
    });
}

module.exports = {
    googleAuth
    , googleCallback
}
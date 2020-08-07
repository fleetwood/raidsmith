const Url = require('url-parse');

const urlString = (req, str) => {
    let url = new Url(str);
    if (!url.host || url.host == '') {
        url.host = req.get('host')
    }
    if (!url.protocol || url.protocol == '') {
        url.protocol = req.protocol || 'http'
    }
    let port = (url.port) ? ':'+url.port : ''
    let result = new Url(`${url.protocol}//${url.hostname}${port}${url.pathname}${url.query}`);
    return result.toString();
}

module.exports = {
    urlString
}
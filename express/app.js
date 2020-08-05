const { auth, server } = require('./../config');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const helpers = require('./../views/scripts/helpers');

const routes = {
	attributes: require('./routes/attributes')
	, artifacts: require('./routes/artifacts')
	, characters: require('./routes/characters')
	, factions: require('./routes/factions')
	, rarities: require('./routes/rarities')
	, sets: require('./routes/sets')
};
const { googleAuth, googleCallback } = require('./routes/auth')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  req.rawBody = '';
  req.on('data', (chunk) => req.rawBody += chunk);
  next();
});

// use express-handlebars view engine and set views template directory
const hbs = exphbs.create({
	handlebars: allowInsecurePrototypeAccess(Handlebars),
	extname: '.hbs',
	partialsDir: __dirname + '/views/partials',
	helpers: helpers()
  })
  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');
  app.set('views', __dirname + '/views');
  
  // serve static files
  app.use(express.static(path.resolve(__dirname, 'public'))) // serve public files
//   app.use(express.static(path.resolve(__dirname, 'data'))) // serve json files

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

// We provide a root route just as an example
app.get('/', (req, res) => {
	res.send(`
		<h2>Hello, Sequelize + Express!</h2>
		<p>Make sure you have executed <b>npm run setup-example-db</b> once to have a populated example database. Otherwise, you will get <i>'no such table'</i> errors.</p>
		<p>Try some routes, such as <a href='/api/users'>/api/users</a> or <a href='/api/orchestras?includeInstruments'>/api/orchestras?includeInstruments</a>!</p>
		<p>To experiment with POST/PUT/DELETE requests, use a tool for creating HTTP requests such as <a href='https://github.com/jakubroztocil/httpie#readme'>HTTPie</a>, <a href='https://www.postman.com/downloads/'>Postman</a>, or even <a href='https://en.wikipedia.org/wiki/CURL'>the curl command</a>, or write some JS code for it with <a href='https://github.com/sindresorhus/got#readme'>got</a>, <a href='https://github.com/sindresorhus/ky#readme'>ky</a> or <a href='https://github.com/axios/axios#readme'>axios</a>.</p>
	`);
});

googleCallback(app);
app.get('/auth', (req, res, next) => googleAuth(req, res, next))

// We define the standard REST APIs for each route (if they exist).
for (const [routeName, routeController] of Object.entries(routes)) {
	if (routeController.getAll) {
		app.get(
			`/api/${routeName}`,
			(req, res, next) => googleAuth(req, res, next),
			makeHandlerAwareOfAsyncErrors(routeController.getAll)
		);
	}
	if (routeController.getById) {
		app.get(
			`/api/${routeName}/:id`,
			(req, res, next) => googleAuth(req, res, next),
			makeHandlerAwareOfAsyncErrors(routeController.getById)
		);
	}
	if (routeController.create) {
		app.post(
			`/api/${routeName}`,
			(req, res, next) => googleAuth(req, res, next),
			makeHandlerAwareOfAsyncErrors(routeController.create)
		);
	}
	if (routeController.update) {
		app.put(
			`/api/${routeName}/:id`,
			(req, res, next) => googleAuth(req, res, next),
			makeHandlerAwareOfAsyncErrors(routeController.update)
		);
	}
	if (routeController.remove) {
		app.delete(
			`/api/${routeName}/:id`,
			(req, res, next) => googleAuth(req, res, next),
			makeHandlerAwareOfAsyncErrors(routeController.remove)
		);
	}
}

module.exports = app;

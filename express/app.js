const { auth, server } = require('./../config');
const path = require('path');
const isDev = server.env == 'development';
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const helpers = require('./../views/scripts/helpers');

const routes = {
	attributes: require('./routes/api/attributes')
	, artifacts: require('./routes/api/artifacts')
	, characters: require('./routes/api/characters')
	, factions: require('./routes/api/factions')
	, rarities: require('./routes/api/rarities')
	, sets: require('./routes/api/sets')
};

const app = express();

// use express-handlebars view engine and set views template directory
const hbs = exphbs.create({
	handlebars: allowInsecurePrototypeAccess(Handlebars),
	extname: '.hbs',
	partialsDir: path.join(__dirname, './../views/partials'),
	helpers: helpers()
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './../views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public'))) // serve public files
app.use(express.static(path.resolve(__dirname, 'data'))) // serve json files
app.use(favicon(path.join(__dirname,'./../public/images/favico.ico')));

app.use(function (req, res, next) {
	req.rawBody = '';
	req.on('data', (chunk) => req.rawBody += chunk);
	next();
});

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function (req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

// We provide a root route just as an example
app.get('/', (req, res) => {
	res.render('home', {
		layout: 'main'
		, title: 'RaidSmith'
		, authUser: app.authUser || null
		, isDev
	})
});

app.isDev = isDev;
app.authUser = null;
require('./auth').init(app);

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

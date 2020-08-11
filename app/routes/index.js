const glob = require('glob');
const Router = require('express').Router;
const { authInit, googleAuthenticate } = require('./auth');

const apiRoutes = {
	attributes: require('./api/attributes')
	, artifacts: require('./api/artifacts')
	, characters: require('./api/characters')
	, factions: require('./api/factions')
	, players: require('./api/players')
	, rarities: require('./api/rarities')
	, sets: require('./api/sets')
};

const asyncErrorHandler = (handler) => {
	return async function (req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

const init = (app) => {
    authInit(app);

    for (const [route, controller] of Object.entries(apiRoutes)) {
        if (controller.getAll) {
            app.get(
                `/api/${route}`,
                (req, res, next) => googleAuthenticate(req, res, next),
                asyncErrorHandler(controller.getAll)
            );
        }
        if (controller.getById) {
            app.get(
                `/api/${route}/:id`,
                (req, res, next) => googleAuthenticate(req, res, next),
                asyncErrorHandler(controller.getById)
            );
        }
        if (controller.create) {
            app.post(
                `/api/${route}`,
                (req, res, next) => googleAuthenticate(req, res, next),
                asyncErrorHandler(controller.create)
            );
        }
        if (controller.update) {
            app.put(
                `/api/${route}/:id`,
                (req, res, next) => googleAuthenticate(req, res, next),
                asyncErrorHandler(controller.update)
            );
        }
        if (controller.remove) {
            app.delete(
                `/api/${route}/:id`,
                (req, res, next) => googleAuthenticate(req, res, next),
                asyncErrorHandler(controller.remove)
            );
        }
    }
    
    glob
        .sync('**/*.js', { cwd: `${__dirname}/` })
        .map(filename => require(`./${filename}`))
        .filter(router => Object.getPrototypeOf(router) == Router)
        .forEach(route => app.use(route));

    return app;
}

module.exports = {
    init
};

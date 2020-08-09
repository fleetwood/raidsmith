const { authInit, googleAuthenticate, authUser } = require('./../auth');

const apiRoutes = {
	attributes: require('./api/attributes')
	, artifacts: require('./api/artifacts')
	, characters: require('./api/characters')
	, factions: require('./api/factions')
	, players: require('./api/players')
	, rarities: require('./api/rarities')
	, sets: require('./api/sets')
};

const makeHandlerAwareOfAsyncErrors = (handler) => {
	return async function (req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

const init = (app) => {
    app.get('/', (req, res) => {
        authUser()
            .then(user => {
                res.render('home', {
                    layout: 'main'
                    , title: 'RaidSmith'
                    , authUser: app.authUser
                    , isDev: app.isDev
                })
            })
            .catch(e => {
                console.log(`What the what? ${e.message || e}`);
            })
    });

    authInit(app);

    for (const [routeName, routeController] of Object.entries(apiRoutes)) {
        if (routeController.getAll) {
            app.get(
                `/api/${routeName}`,
                (req, res, next) => googleAuthenticate(req, res, next),
                makeHandlerAwareOfAsyncErrors(routeController.getAll)
            );
        }
        if (routeController.getById) {
            app.get(
                `/api/${routeName}/:id`,
                (req, res, next) => googleAuthenticate(req, res, next),
                makeHandlerAwareOfAsyncErrors(routeController.getById)
            );
        }
        if (routeController.create) {
            app.post(
                `/api/${routeName}`,
                (req, res, next) => googleAuthenticate(req, res, next),
                makeHandlerAwareOfAsyncErrors(routeController.create)
            );
        }
        if (routeController.update) {
            app.put(
                `/api/${routeName}/:id`,
                (req, res, next) => googleAuthenticate(req, res, next),
                makeHandlerAwareOfAsyncErrors(routeController.update)
            );
        }
        if (routeController.remove) {
            app.delete(
                `/api/${routeName}/:id`,
                (req, res, next) => googleAuthenticate(req, res, next),
                makeHandlerAwareOfAsyncErrors(routeController.remove)
            );
        }
    }
    return app;
}

module.exports = {
    init
};

const { Sequelize } = require('sequelize');
const { lookups } = require('./lookups');

//TODO: move db to postgres
//TODO: move config to env
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db/data/db.sqlite',
	logQueryParameters: true,
	benchmark: true
});

const modelDefiners = [
	require('./models/Artifact.model')
	, require('./models/Attribute.model')
	, require('./models/Character.model')
	, require('./models/Faction.model')
	, require('./models/Rarity.model')
	, require('./models/Set.model')
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}
Promise
	.all(modelDefiners.forEach(model => model(sequelize)))
	.then(() => {
		//TODO: lookups aren't working in db setup
		Promise.all(modelDefiners.forEach(model => model.lookups(sequelize)))
			.then(() => {
				sequelize.sync({force: true});
				console.log('Setup complete!');
			});
	})
	.catch(e => {
		console.log(e.message)
	});

module.exports = sequelize;

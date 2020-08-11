const {Sequelize, Model, DataTypes, sequelize} = require('./_db');

const Artifact = require('./Artifact.model')
	, Attribute = require('./Attribute.model')
	, Character = require('./Character.model')
	, Faction = require('./Faction.model')
	, Player = require('./Player.model')
	, Rarity = require('./Rarity.model')
	, Set = require('./Set.model');
const { associations } = require('./associations');

const init = () => new Promise((resolve, reject) => {
	console.log('Initializing sequelize....')
	Promise.all([
		Artifact.define(),
		Attribute.define(),
		Character.define(),
		Faction.define(),
		Player.define(),
		Rarity.define(),
		Set.define(),
		associations(sequelize.models)
	])
	.then(() => {
		console.log('Sequelize initialized successfully!')
		resolve(sequelize.sync());
	})
	.catch(e => {
		console.log(`ERROR: ${e.message || e}`);
		reject(e);
	});
});

init();

module.exports = {
	init,
	Sequelize,
	Model,
	DataTypes,
	sequelize,
	models: sequelize.models,
	Artifact
	, Attribute
	, Character
	, Faction
	, Player
	, Rarity
	, Set
}

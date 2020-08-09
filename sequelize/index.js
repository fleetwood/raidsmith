const {Sequelize, Model, DataTypes, sequelize} = require('./../db');

const Artifact = require('./models/Artifact.model')
	, Attribute = require('./models/Attribute.model')
	, Character = require('./models/Character.model')
	, Faction = require('./models/Faction.model')
	, Player = require('./models/Player.model')
	, Rarity = require('./models/Rarity.model')
	, Set = require('./models/Set.model');
const { associations } = require('./associations');

Promise.all([
	Artifact.define(),
	Attribute.define(),
	Character.define(),
	Faction.define(),
	Player.define(),
	Rarity.define(),
	Set.define()
])
	.then(() => associations(sequelize.models))
	.catch(e => {
		console.log(e.message || e);
	});

module.exports = {
	Sequelize,
	Model,
	DataTypes,
	sequelize,
	models: sequelize.models
}

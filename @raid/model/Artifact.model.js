const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, icon: {
		allowNull: true,
		type: DataTypes.STRING
	}
	, stars: {
		allowNull: false,
		type: DataTypes.INTEGER,
		default: 1,
		minValue: 1,
		maxValue: 6
	}
	, level: {
		allowNull: false,
		type: DataTypes.INTEGER,
		default: 0
	}
};

class Artifact extends Model { }

Artifact.Types = {
	WEAPON: 'Weapon'
	, HELMET: 'Helmet'
	, SHIELD: 'Shield'
	, GAUNTLETS: 'Gauntlets'
	, CHESTPLATE: 'Chestplate'
	, BOOTS: 'Boots'
	, RING: 'Ring'
	, AMULET: 'Amulet'
	, BANNER: 'Banner'
}

Artifact.define = () => Artifact.init(schema, { sequelize });

Artifact.findAllEager = (where) => Artifact.findAll(_.extend({ include: [{ all: true }]}, where));
Artifact.findOneEager = (where) => Artifact.findOne(_.extend({ include: [{ all: true }]}, where));

module.exports = Artifact;

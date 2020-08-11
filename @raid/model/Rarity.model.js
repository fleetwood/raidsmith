const _ = require('underscore');
const { Model, DataTypes, sequelize} = require('./_db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING
	}
};

class Rarity extends Model {}

Rarity.Types = {
	COMMON: 'COMMON'
	, UNCOMMON: 'UNCOMMON'
	, RARE: 'RARE'
	, EPIC: 'EPIC'
	, LEGENDARY: 'LEGENDARY'
};

Rarity.define = () => Rarity.init(schema, {sequelize});

Rarity.findAllEager = (where) => Rarity.findAll(_.extend({ include: [{ all: true }]}, where));
Rarity.findOneEager = (where) => Rarity.findOne(_.extend({ include: [{ all: true }]}, where));

module.exports = Rarity;

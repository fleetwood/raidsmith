const _ = require('underscore');
const { Model, DataTypes, sequelize} = require('./_db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	}
};

class Faction extends Model {}
Faction.define = () => Faction.init(schema, {sequelize});

Faction.findAllEager = (where) => Faction.findAll(_.extend({ include: [{ all: true }]}, where));
Faction.findOneEager = (where) => Faction.findOne(_.extend({ include: [{ all: true }]}, where));

module.exports = Faction;

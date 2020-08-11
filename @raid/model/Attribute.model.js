const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, value: {
		allowNull: false,
		type: DataTypes.INTEGER,
		default: 0
	}
}

class Attribute extends Model { };

Attribute.Types = {
	HP: 'HP'
	, ATK: 'ATTACK'
	, DEF: 'DEFENSE'
	, SPD: 'SPEED'
	, CRATE: 'CRITICAL RATE'
	, CDMG: 'CRIT DAMAGE'
	, RES: 'RESIST'
	, ACC: 'ACCURACY'
}

Attribute.define = () => Attribute.init(schema, { sequelize });

Attribute.findAllEager = (where) => Attribute.findAll(_.extend({ include: [{ all: true }]}, where));
Attribute.findOneEager = (where) => Attribute.findOne(_.extend({ include: [{ all: true }]}, where));

module.exports = Attribute;

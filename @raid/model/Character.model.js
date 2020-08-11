const _ = require('underscore');
const { Model, DataTypes, sequelize} = require('./_db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING,
		// unique: true,
		// validate: {
		// 	// We require usernames to have length of at least 3, and
		// 	// only use letters, numbers and underscores.
		// 	is: /^\w{3,}$/
		// }
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
		default: 1,
		minValue: 1,
		maxValue: 60,
	}
	, thumbnail: {
		allowNull: true,
		type: DataTypes.STRING
	}
};

class Character extends Model {}
Character.define = () => Character.init(schema, {sequelize});

Character.findAllEager = (where) => Character.findAll(_.extend({ include: [{ all: true }]}, where));
Character.findOneEager = (where) => Character.findOne(_.extend({ include: [{ all: true }]}, where));

module.exports = Character;

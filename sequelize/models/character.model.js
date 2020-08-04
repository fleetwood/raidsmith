const _ = require('underscore');
const { sequelize, Model, DataTypes} = require('./../../db');

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
	, level: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, thumbnail: {
		allowNull: true,
		type: DataTypes.STRING
	}
};

class Character extends Model {}
Character.define = () => Character.init(schema, {sequelize});

Character.inclusions = [];
Character.addToIncludes = (model) => {
	if (Array.isArray(model)) {
		model.forEach(m => Character.addToIncludes(m));
		return;
	}
    if (!_.contains(Character.inclusions, model)) {
        Character.inclusions.push(model);
    }
}

Character.findAllEager = (where) => Character.findAll(_.extend({ include: Character.inclusions }, where));
Character.findOneEager = (where) => Character.findOne(_.extend({ include: Character.inclusions }, where));

module.exports = Character;

const _ = require('underscore');
const { sequelize, Model, DataTypes} = require('./../../db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	}
	, description: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, modifier: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, requirement: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, icon: {
		allowNull: true,
		type: DataTypes.STRING
	}
};

class Set extends Model {}
Set.define = () => Set.init(schema, {sequelize});

Set.inclusions = [];
Set.addToIncludes = (model) => {
	if (Array.isArray(model)) {
		model.forEach(m => Set.addToIncludes(m));
		return;
	}
    if (!_.contains(Set.inclusions, model)) {
        Set.inclusions.push(model);
    }
}

Set.findAllEager = (where) => Set.findAll(_.extend({ include: Set.inclusions }, where));
Set.findOneEager = (where) => Set.findOne(_.extend({ include: Set.inclusions }, where));

module.exports = Set;

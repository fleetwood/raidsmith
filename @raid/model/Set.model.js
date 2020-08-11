const _ = require('underscore');
const { Model, DataTypes, sequelize} = require('./_db');

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

Set.findAllEager = (where) => Set.findAll(_.extend({ include: [{ all: true }]}, where));
Set.findOneEager = (where) => Set.findOne(_.extend({ include: [{ all: true }]}, where));

module.exports = Set;

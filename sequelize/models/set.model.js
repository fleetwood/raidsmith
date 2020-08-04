const { Model, DataTypes } = require('sequelize');
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
Set.inclusions = [];
Set.addToIncludes = (model) => {
    if (!_.contains(Set.inclusions, model)) {
        Set.inclusions.push(model);
    }
}
Set.lookups = (sequelize) => {
	const {
		Attribute,
		Artifact
	} = sequelize.models;
	Set.hasMany(Artifact);
	Set.hasMany(Attribute);
}


module.exports = (sequelize) => sequelize.define('Set', schema);

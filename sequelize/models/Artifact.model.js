const _ = require('underscore');
const { Model, DataTypes } = require('sequelize');

const schema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	}
	, name: {
		allowNull: false,
		type: DataTypes.STRING,
	}
	, icon: {
		allowNull: true,
		type: DataTypes.STRING
	}
	, stars: {
		allowNull: false,
		default: 2,
		type: DataTypes.INTEGER
	}
	, level: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
};

class Artifact extends Model {}
Artifact.inclusions = [];
Artifact.addToIncludes = (model) => {
    if (!_.contains(Artifact.inclusions, model)) {
        Artifact.inclusions.push(model);
    }
}
Artifact.lookups = (sequelize) => {
	const { 
		Attribute,
		Character,
		Rarity,
		Set
	} = sequelize.models;
	Artifact.hasMany(Attribute);
	Artifact.hasOne(Rarity);
	Artifact.hasOne(Set);
	Artifact.belongsTo(Character);
}

module.exports = (sequelize) => sequelize.define('Artifact', schema);

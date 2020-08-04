const { Model, DataTypes } = require('sequelize');
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
Character.inclusions = [];
Character.addToIncludes = (model) => {
    if (!_.contains(Character.inclusions, model)) {
        Character.inclusions.push(model);
    }
}
Character.lookups = (sequelize) => {
	const { 
		Artifact,
		Attribute,
		Faction,
		Rarity
	} = sequelize.models;
	Character.hasMany(Artifact);
	Character.hasMany(Attribute);
	Character.hasOne(Faction);
	Character.hasOne(Rarity);
}

module.exports = (sequelize) => sequelize.define('Character', schema);

const { Model, DataTypes } = require('sequelize');
const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	}
};

class Faction extends Model {}
Faction.inclusions = [];
Faction.addToIncludes = (model) => {
    if (!_.contains(Faction.inclusions, model)) {
        Faction.inclusions.push(model);
    }
}
Faction.lookups = (sequelize) => {
	const { 
		Character
	} = sequelize.models;
	Faction.belongsToMany(Character, {
		through: 'CharacterFactions'
		, as: 'faction'
		, foreignKey: 'CharacterId'
	});
}

module.exports = (sequelize) => sequelize.define('Faction', schema);

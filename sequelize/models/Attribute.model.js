const { Model, DataTypes } = require('sequelize');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING
	}
}

class Attribute extends Model {}
Attribute.inclusions = [];
Attribute.addToIncludes = (model) => {
    if (!_.contains(Attribute.inclusions, model)) {
        Attribute.inclusions.push(model);
    }
}
Attribute.lookups = (sequelize) => {
	const { 
		Artifact,
		Character,
		Set
	} = sequelize.models;
	Attribute.belongsToMany(Artifact, {
		through: 'ArtifactAttributes'
		, as: 'attributes'
		, foreignKey: 'ArtifactId'
	});
	Attribute.belongsToMany(Character, {
		through: 'CharacterAttributes'
		, as: 'attributes'
		, foreignKey: 'CharacterId'
	});
	Attribute.belongsToMany(Set, {
		through: 'SetAttributes'
		, as: 'attributes'
		, foreignKey: 'SetId'
	});
}

module.exports = (sequelize) => sequelize.define('Attribute', schema);

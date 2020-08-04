const lookups = (sequelize) => {
	const { 
		Artifact,
		Attribute,
		Character,
		Faction,
		Race,
		Set
	} = sequelize.models;
	
	// Artifact.lookups(sequelize);
	// Attribute.lookups(sequelize);
	// Character.lookups(sequelize);
	// Faction.lookups(sequelize);
	// Race.lookups(sequelize);
	// Set.lookups(sequelize);
}

module.exports = { lookups };

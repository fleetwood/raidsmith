const associations = (models) => new Promise((resolve, reject) => {
	console.log('Creating associations....')
	try {
		const {
			Artifact,
			Attribute,
			Character,
			Faction,
			Player,
			Rarity,
			Set
		} = models;

		////// ARTIFACT
		Artifact.hasMany(Attribute);
		Artifact.hasOne(Rarity);
		Artifact.hasOne(Set);
		Artifact.hasOne(Faction);
		Artifact.belongsTo(Character);
		Artifact.belongsTo(Player);
		// Artifact.addToIncludes([Attribute, Rarity, Set, Character, Player]);
		console.log(`\tAssociated Artifacts`);


		////// ATTRIBUTE
		Attribute.belongsToMany(Artifact, {
			through: 'ArtifactAttributes'
		});
		Attribute.belongsToMany(Character, {
			through: 'CharacterAttributes'
		});
		Attribute.belongsToMany(Set, {
			through: 'SetAttributes'
		});
		// Attribute.addToIncludes([Artifact, Character, Set]);
		console.log(`\tAssociated Attributes`);


		////// CHARACTER
		Character.hasMany(Artifact);
		Character.hasMany(Attribute);
		Character.hasOne(Faction);
		Character.hasOne(Rarity);
		Character.belongsTo(Player);
		// Character.addToIncludes([Artifact, Attribute, Faction, Player, Rarity]);
		console.log(`\tAssociated Characters`);


		////// FACTION
		Faction.belongsToMany(Character, {
			through: 'CharacterFactions'
		});
		Faction.belongsToMany(Artifact, {
			through: 'ArtifactFactions'
		});
		// Faction.addToIncludes([Character, Artifact]);
		console.log(`\tAssociated Factions`);


		////// PLAYER
		Player.hasMany(Character);
		Player.hasMany(Artifact);
		// Player.addToIncludes([Artifact, Character]);
		console.log(`\tAssociated Players`);


		////// RARITY
		Rarity.belongsToMany(Artifact, {
			through: 'ArtifactRarities'
		});
		Rarity.belongsToMany(Character, {
			through: 'CharacterRarities'
		});
		// Rarity.addToIncludes([Artifact, Character]);
		console.log(`\tAssociated Rarities`);


		////// SET
		Set.belongsToMany(Artifact, {
			through: 'ArtifactSets'
		});
		Set.belongsToMany(Attribute, {
			through: 'SetAttributes'
		});
		// Set.addToIncludes([Artifact, Attribute]);
		console.log(`\tAssociated Sets`);

		console.log('Done!')
		resolve();
	}
	catch (e) {
		console.log(`ERROR: ${e.message || e}`);
		reject(e);
	}
});

module.exports = { associations };

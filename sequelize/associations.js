const associations = (models) => {
	const {
		Artifact,
		Attribute,
		Character,
		Faction,
		Player,
		Rarity,
		Set
	} = models;


	Artifact.hasMany(Attribute);
	Artifact.hasOne(Rarity);
	Artifact.hasOne(Set);
	Artifact.belongsTo(Character);
	Artifact.belongsTo(Player);
	Artifact.addToIncludes([Attribute, Rarity, Set, Character, Player]);
	console.log(`Associated Artifacts`)
	
	
	Attribute.belongsToMany(Artifact, {
		through: 'ArtifactAttributes'
	});
	Attribute.belongsToMany(Character, {
		through: 'CharacterAttributes'
	});
	Attribute.belongsToMany(Set, {
		through: 'SetAttributes'
	});
	Attribute.addToIncludes([Artifact, Character, Set]);
	console.log(`Associated Attributes`)
	
	
	Character.hasMany(Artifact);
	Character.hasMany(Attribute);
	Character.hasOne(Faction);
	Character.hasOne(Rarity);
	Character.belongsTo(Player)
	Character.addToIncludes([Artifact, Attribute, Faction, Player, Rarity]);
	console.log(`Associated Characters`)
	
	
	Faction.belongsToMany(Character, {
		through: 'CharacterFactions'
	});
	Faction.addToIncludes(Character);
	console.log(`Associated Factions`)
	
	
	Player.hasMany(Character);
	Player.hasMany(Artifact);
	Player.addToIncludes([Artifact, Character]);
	console.log(`Associated Players`)
	
	
	Rarity.belongsToMany(Artifact, {
		through: 'ArtifactRarities'
	});
	Rarity.addToIncludes(Artifact);
	console.log(`Associated Rarities`)
	
	
	Set.belongsToMany(Artifact, {
		through: 'ArtifactSets'
	});
	Set.belongsToMany(Attribute, {
		through: 'SetAttributes'
	});
	Set.addToIncludes([Artifact, Attribute]);
	console.log(`Associated Sets`)
}

module.exports = { associations };

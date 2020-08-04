const associations = (models) => {
	const {
		Artifact,
		Attribute,
		Character,
		Faction,
		Rarity,
		Set
	} = models;

	Artifact.hasMany(Attribute);
	Artifact.hasOne(Rarity);
	Artifact.hasOne(Set);
	Artifact.belongsTo(Character);
	Artifact.addToIncludes([Attribute, Rarity, Set, Character]);

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

	Character.hasMany(Artifact);
	Character.hasMany(Attribute);
	Character.hasOne(Faction);
	Character.hasOne(Rarity);
	Character.addToIncludes([Artifact, Attribute, Faction, Rarity]);

	Faction.belongsToMany(Character, {
		through: 'CharacterFactions'
	});
	Faction.addToIncludes(Character);

	Rarity.belongsToMany(Artifact, {
		through: 'ArtifactRarities'
	});
	Rarity.addToIncludes(Artifact);

	Set.belongsToMany(Artifact, {
		through: 'ArtifactSets'
	});
	Set.belongsToMany(Attribute, {
		through: 'SetAttributes'
	});
	Set.addToIncludes([Artifact, Attribute]);
}

module.exports = { associations };

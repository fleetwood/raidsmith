const { Modifier } = require("../_index");

const associations = (models) => new Promise((resolve, reject) => {
	console.log('Creating associations....')
	try {
		const {
			Affinity,
			Artifact,
			Character,
			Faction,
			Modifier,
			Player,
			Rarity,
			Set
		} = models;

		////// AFFINITY
		Affinity.associate(models);

		////// ARTIFACT
		Artifact.associate(models);

		////// MODIFIER
		Modifier.associate(models);

		////// CHARACTER
		Character.associate(models);

		////// FACTION
		Faction.associate(models);

		////// PLAYER
		Player.associate(models);

		////// RARITY
		Rarity.associate(models);

		////// SET
		Set.associate(models);
		
		console.log('Done!')
		resolve();
	}
	catch (e) {
		console.log(`ERROR: ${e.message || e}`);
		reject(e);
	}
});

module.exports = { associations };

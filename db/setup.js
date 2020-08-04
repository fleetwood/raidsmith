const { sequelize } = require('../sequelize');

async function reset() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.');

	await sequelize.sync({ force: true });

	await sequelize.models.Artifact.bulkCreate([
		{
			name: 'Weapon'
			, icon: ''
			, stars: 3
			, level: 0
		}
		, {
			name: 'Helmet'
			, icon: ''
			, stars: 1
			, level: 0
		}
		, {
			name: 'Shield'
			, icon: ''
			, stars: 3
			, level: 0
		}
		, {
			name: 'Gauntlets'
			, icon: ''
			, stars: 5
			, level: 8
		}
		, {
			name: 'Breastplate'
			, icon: ''
			, stars: 3
			, level: 8
		}
		, {
			name: 'Boots'
			, icon: ''
			, stars: 3
			, level: 4
		}
	]);

	await sequelize.models.Attribute.bulkCreate([
		{ name: 'HP' }
		, { name: 'ATK' }
		, { name: 'DEF' }
		, { name: 'SPD' }
		, { name: 'C. RATE' }
		, { name: 'C. DMG' }
		, { name: 'RESIST' }
		, { name: 'ACC' }
	]);

	await sequelize.models.Character.bulkCreate([
		{
			name: 'Valkyrie'
			, level: 60
			, thumbnail: ''
		}
		, {
			name: 'Julianna'
			, level: 50
			, thumbnail: ''
		}
		, {
			name: 'Yaga the Insatiable'
			, level: 40
			, thumbnail: ''
		}
	]);

	await sequelize.models.Set.bulkCreate([
		{
			name: 'Life'
			, description: 'HP +15%'
			, modifier: 15
			, requirement: 2
			, icon: ''
		}
		, {
			name: 'Offense'
			, description: 'ATK +15%'
			, modifier: 15
			, requirement: 2
			, icon: ''
		}
		, {
			name: 'Defense'
			, description: 'DEF +15%'
			, modifier: 15
			, requirement: 2
			, icon: ''
		}
		, {
			name: 'Speed'
			, description: 'SPD +15%'
			, modifier: 15
			, requirement: 2
			, icon: ''
		}
		, {
			name: 'Critical Rate'
			, description: 'C. RATE +12%'
			, modifier: 12
			, requirement: 2
			, icon: ''
		}
		, {
			name: 'Crit Damage'
			, description: 'C. DMG +20%'
			, modifier: 20
			, requirement: 2
			, icon: ''
		}
		, {
			name: 'Accuracy'
			, description: 'ACC +40'
			, modifier: 40
			, requirement: 2
			, icon: ''
		}
		, {
			name: 'Resistance'
			, description: 'RES +40'
			, modifier: 40
			, requirement: 2
			, icon: ''
		}
		, {
			name: 'Lifesteal'
			, description: 'Heals by 30% of damage dealt'
			, modifier: 0
			, requirement: 4
			, icon: ''
		}
		, {
			name: 'Fury'
			, description: 'Damage increases as HP decreases'
			, modifier: 0
			, requirement: 4
			, icon: ''
		}
		, {
			name: 'Daze'
			, description: '25% chance to place Sleep debuff'
			, modifier: 0
			, requirement: 4
			, icon: ''
		}
		, {
			name: 'Cursed'
			, description: '50% chance to place 50% Heal Reduction debuff'
			, modifier: 0
			, requirement: 4
			, icon: ''
		}
		, {
			name: 'Frost'
			, description: '20% chance to place Freeze debuff on Attacker'
			, modifier: 0
			, requirement: 4
			, icon: ''
		}
		, {
			name: 'Frenzy'
			, description: '+10% Turn Meter for every 5% HP lost'
			, modifier: 0
			, requirement: 4
			, icon: ''
		}
	]);

	await sequelize.models.Faction.bulkCreate([
		{
			name: 'Lizardmen'
		}
		, {
			name: 'Skinwalker'
		}
		, {
			name: 'Knight Revenant'
		}
		, {
			name: 'Undead Horde'
		}
		, {
			name: 'Demonspawn'
		}
		, {
			name: 'Ogryn Tribe'
		}
		, {
			name: 'Orc'
		}
		, {
			name: 'High Elf'
		}
		, {
			name: 'Dark Elf'
		}
		, {
			name: 'Sacred Order'
		}
		, {
			name: 'Banner Lord'
		}
		, {
			name: 'Barbarian'
		}
		, {
			name: 'Dwarf'
		}
	]);

	await sequelize.models.Rarity.bulkCreate([
		{
			name: 'Common'
		}
		, {
			name: 'Uncommon'
		}
		, {
			name: 'Rare'
		}
		, {
			name: 'Epic'
		}
		, {
			name: 'Legendary'
		}
	]);

	console.log('Done!');
}

reset();

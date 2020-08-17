const { Sequelize, Model, DataTypes, sequelize } = require('./_db');

const Affinity = require('./Affinity.model')
	, Artifact = require('./Artifact.model')
	, Modifier = require('./Modifier.model')
	, Character = require('./Character.model')
	, Faction = require('./Faction.model')
	, Player = require('./Player.model')
	, Rarity = require('./Rarity.model')
	, Set = require('./Set.model');
const { associations } = require('./associations');

const associate = () => new Promise((resolve, reject) => {
	associations(sequelize.models)
		.then(resolve())
		.catch(e => {
			console.log(`FAILED syncing associations: ${e.message || e}`);
			reject(e);
		});
});

const init = () => new Promise((resolve, reject) => {
	associate()
		.then(() => {
			console.log('Syncing db...')
			sequelize.sync()
			.then((r) => {
				console.log('Database synced!')
				resolve(r);
			});
		})
		.catch(e => {
			console.log(`ERROR: ${e.message || e}`);
			reject(e);
		});
});

const reset = () => new Promise((resolve, reject) => {
	associate()
		.then(() => {
			console.log('Force-syncing db...')
			sequelize.sync({force: true})
			.then((r) => {
				console.log('Database synced!')
				resolve(r);
			});
		})
		.catch(e => {
			console.log(`ERROR: ${e.message || e}`);
			reject(e);
		});
});

/**
 * ```js
 * {
 *   Affinities: {
 *     MAGIC
 *     , FORCE
 *     , SPIRIT
 *     , VOID
 *   },
 *   Artifacts: {
 *     WEAPON
 *     , HELMET
 *     , SHIELD
 *     , GAUNTLETS
 *     , CHESTPLATE
 *     , BOOTS
 *     , RING
 *     , AMULET
 *     , BANNER
 *   },
 *   Attributes: {
 *     HP: 'HP'
 *     , ATK
 *     , DEF
 *     , SPD
 *     , CRATE
 *     , CDMG
 *     , RES
 *     , ACC
 *     , Abbr: {
 *         HP
 *         , ATK
 *         , DEF
 *         , SPD
 *         , CRATE
 *         , CDMG
 *         , RES
 *         , ACC
 *     }
 *   }, 
 *   Methods: {
 *     PERC
 *     , PLUS
 *     , PASSIVE
 *   }, 
 *   Rarity: {
 *     COMMON
 *     , UNCOMMON
 *     , RARE
 *     , EPIC
 *     , LEGENDARY
 *   }
 * }
 * ```
 */
const Labels = {
	Affinities: {
		MAGIC: 'Magic'
		, FORCE: 'Force'
		, SPIRIT: 'Spirit'
		, VOID: 'Void'
	}
	, Artifacts: {
		WEAPON: 'Weapon'
		, HELMET: 'Helmet'
		, SHIELD: 'Shield'
		, GAUNTLETS: 'Gauntlets'
		, CHESTPLATE: 'Chestplate'
		, BOOTS: 'Boots'
		, RING: 'Ring'
		, AMULET: 'Amulet'
		, BANNER: 'Banner'
	}
	, Attributes: {
		HP: 'HP'
		, ATK: 'Attack'
		, DEF: 'Defense'
		, SPD: 'Speed'
		, CRATE: 'Critical Rate'
		, CDMG: 'Crit Damage'
		, RES: 'Resist'
		, ACC: 'Accuracy'
		, Abbr: {
			HP: 'HP'
			, ATK: 'ATK'
			, DEF: 'DEF'
			, SPD: 'SPD'
			, CRATE: 'C. RATE'
			, CDMG: 'C. DMG'
			, RES: 'RES'
			, ACC: 'ACC'
		}
	}
	, Methods: {
		PERC: 'Percent'
		, PLUS: 'Plus'
		, PASSIVE: 'Passive'
	}
	, Rarity: {
		COMMON: 'Common'
		, UNCOMMON: 'Uncommon'
		, RARE: 'Rare'
		, EPIC: 'Epic'
		, LEGENDARY: 'Legendary'
	}
}

module.exports = {
	init,
	reset,
	Sequelize,
	Model,
	DataTypes,
	sequelize,
	models: sequelize.models,
	Labels,
	Affinity
	, Artifact
	, Modifier
	, Character
	, Faction
	, Player
	, Rarity
	, Set
}

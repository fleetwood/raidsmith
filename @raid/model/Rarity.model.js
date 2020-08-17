const _ = require('underscore');
const { Model, DataTypes, sequelize} = require('./_db');

const schema = {
	name: {
		unique: true,
		allowNull: false,
		type: DataTypes.STRING
	}
};

class Rarity extends Model {}
Rarity.init(schema, {sequelize}, { timestamps: false });

Rarity.findAllEager = (where) => Rarity.findAll(_.extend({ include: [{ all: true }]}, where));
Rarity.findOneEager = (where) => Rarity.findOne(_.extend({ include: [{ all: true }]}, where));

Rarity.associate = (models) => {
	Rarity.belongsToMany(models.Character, {
		through: 'CharacterRarities'
	});
	Rarity.belongsToMany(models.Artifact, {
		through: 'ArtifactRarities'
	});
	console.log('No associations needed for Rarities...');
}

/**
 * ```js
 * params: {
 * 	id?: Int,
 * 	name: String // @raid/model.Labels.Rarities
 * }
 * ```
 * @param {Int?} id `[PK]`
 * @param {String} name @raid/model.Labels.Rarities
 * @returns The `Rarity` from the db, plus whether it is a new record.
 */
Rarity.createOrUpdate = (params) => new Promise((resolve, reject) => {
	params = {...params,...{where: {name: params.name}}};
	Rarity.findOrCreate(params)
		.then((result) => {
			resolve({...result[0],...{created: result[1]}});
		})
		.catch(e => {
			console.log(`Failed createOrUpate: ${e.message || e}`);
			reject(e);
		});
});

module.exports = Rarity;

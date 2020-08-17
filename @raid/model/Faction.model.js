const _ = require('underscore');
const { Model, DataTypes, sequelize} = require('./_db');

const schema = {
	name: {
		unique: true,
		allowNull: false,
		type: DataTypes.STRING
	}
};

class Faction extends Model {}
Faction.init(schema, {sequelize}, { timestamps: false });

Faction.findAllEager = (where) => Faction.findAll(_.extend({ include: [{ all: true }]}, where));
Faction.findOneEager = (where) => Faction.findOne(_.extend({ include: [{ all: true }]}, where));

Faction.associate = (models) => {
	Faction.belongsToMany(models.Character, {
		through: 'CharacterFactions'
	});
	console.log('No associations needed for Factions...');
}
/**
 * 
 * ```js
 * {
 * 	id?: Int
 * 	name: String
 * }
 * ```
 * @param {Int?} id `[PK]` Leave empty to create a new `Faction`
 * @param {String} name `[Unique]` Name of the Faction. Unique constraint
 */
Faction.createOrUpdate = (params) => new Promise((resolve, reject) => {
	params = {...params,...{where: {name: params.name}}};
	Faction.findOrCreate(params)
		.then((result) => {
			resolve({...result[0],...{created: result[1]}});
		})
		.catch(e => {
			console.log(`Failed createOrUpate: ${e.message || e}`);
			reject(e);
		});
});

module.exports = Faction;

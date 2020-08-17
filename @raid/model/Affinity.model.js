const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

const schema = {
	name: {
		unique: true,
		allowNull: false,
		type: DataTypes.STRING,
	}
};

class Affinity extends Model { }
Affinity.init(schema, { sequelize }, { timestamps: false });

Affinity.findAllEager = (where) => Affinity.findAll(_.extend({ include: [{ all: true }] }, where));
Affinity.findOneEager = (where) => Affinity.findOne(_.extend({ include: [{ all: true }] }, where));

Affinity.associate = (models) => {
	Affinity.belongsToMany(models.Character, {
		through: 'CharacterAffinities'
	});
	console.log('Associated Affinities!');
}

/**
 * 
 * ```js
 * {
 * 	id?: Int
 * 	name: String
 * }
 * ```
 * @param {Int?} id `[PK]` Leave empty to create a new `Affinity`
 * @param {String} name `[Unique]` Name of the Affinity. Unique constraint
 */
Affinity.createOrUpdate = (params) => new Promise((resolve, reject) => {
	params = {...params,...{where: {name: params.name}}};
	Affinity.findOrCreate(params)
		.then((result) => {
			resolve({...result[0],...{created: result[1]}});
		})
		.catch(e => {
			console.log(`Failed createOrUpate: ${e.message || e}`);
			reject(e);
		});
});

module.exports = Affinity;

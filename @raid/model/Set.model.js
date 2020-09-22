const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

const schema = {
	name: {
		unique: true,
		allowNull: false,
		type: DataTypes.STRING,
	}
	, description: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, requirement: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, icon: {
		allowNull: true,
		type: DataTypes.STRING
	}
};

const includeAll = { include: [{ all: true }] };

class Set extends Model { }
Set.init(schema, { sequelize });

Set.findAllEager = (where) => Set.findAll(_.extend(includeAll, where));
Set.findOneEager = (where) => Set.findOne(_.extend(includeAll, where));

Set.associate = (models) => {
	Set.belongsToMany(models.Artifact, {
		through: 'SetArtifacts'
	});
	Set.hasOne(models.Modifier, { as: 'SetModifier' })
	console.log('Associated Sets to Artifact and Modifer!');
}

/**
 * ```js
 * params {
 *  id?: INT
 *  name: `[PK]`STRING
 *  description: STRING,
 *  requirement: INT,
 *  icon?: STRING,
 *  modifier?: `Modifier`
 * }
 * ```
 * @param {Int?} id `[PK]` Leave empty to create a new `Set`
 * @param {String} name `[Unique]` The name of the set. Unique constraint.
 * @param {String} description The effects of the set
 * @param {Integer} requirement Usually 2 or 4. The number of artifacts required to fulfill the set.
 * @param {String?} icon The file name of the icon. Do not include path.
 * @param {Modifier?} modifier The modifier associated to the set. Will `createOrUpdate` the modifier.
 * @returns The `Set` from the db.
 */
Set.createOrUpdate = (params) => new Promise((resolve, reject) => {
	if (params.modifier) {
			Set.upsert({...params, ...includeAll})
				.then((result) => {
					let set = Set.build(result[0].dataValues);
					resolve(set);
			})
			.catch(e => {
				console.log(`Failed createOrUpdate: ${e.message || e}`);
				reject(e);
			});
	}
	else {
		Set.upsert(params)
			.then((result) => {
				let set = Set.build(result[0].dataValues);
				resolve(set);
			})
			.catch(e => {
				console.log(`Failed createOrUpdate: ${e.message || e}`);
				reject(e);
			});
	}
});

module.exports = Set;

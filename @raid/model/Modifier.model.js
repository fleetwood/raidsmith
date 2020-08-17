const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

/**
 * schema
 */
const schema = {
	description: {
		allowNull: false,
		type: DataTypes.STRING,
		defaultValue: ''
	}
	, attribute: {
		allowNull: true,
		type: DataTypes.STRING,
	}
	, method: {
		allowNull: true,
		type: DataTypes.STRING
	}
	, value: {
		allowNull: true,
		type: DataTypes.INTEGER
	}
}

/**
 * @property {String} description Used in sets to describe attribute modifier 
 * @property {String} attributes Should be of type Model.Labels.Attribute (Full, not abbreviated)
 * @property {String} method How the attribute is modified. Of type Model.Labels.Methods
 * @property {INTEGER} value The amount by which the attribute is modified.
 */
class Modifier extends Model { };
Modifier.init(schema, { sequelize }, { timestamps: false });

Modifier.findAllEager = (where) => Modifier.findAll(_.extend({ include: [{ all: true }] }, where));
Modifier.findOneEager = (where) => Modifier.findOne(_.extend({ include: [{ all: true }] }, where));

Modifier.associate = (models) => {
	Modifier.belongsTo(models.Artifact);
	Modifier.belongsTo(models.Set);
	console.log('Associated Modifiers!');
}

/**
 * 
 * ```js
 * params: {
 * 	id?: `[PK]`INT,
 * 	description: STRING,
 * 	attribute?: STRING, // Labels.Attributes
 * 	method?: STRING, // Labels.Methods
 * 	value?: STRING, // Labels.Methods
 * }
 * ```
 * @param {Int?} id `[PK]` Leave empty to create a new {@link Modifier}.
 * @param {String} description What the modifier does. Useful for passive modifiers.
 * @param {String?} attribute The attribute affected by the modifier. See `{@link _index#Labels.Attributes}`. Nullable if passive.
 * @param {String?} method How the attribute is modified. Acceptables values (`{@link _index#Labels.Methods}`) `Percent`, `Plus`, `Passive`
 * @param {Int?} value The amount by which the base attribute is modified.
 * @returns The {@link Set} from the db.
 */
Modifier.createOrUpdate = (params) => new Promise((resolve, reject) => {
	Modifier.upsert(params)
		.then(result => {
			let modifier = Modifier.build(result[0].dataValues);
			resolve(modifier);
		})
		.catch(e => {
			console.log(`ERROR on Modifier.createOrUpdate >> ${e.message || e}`);
			reject(e);
		});
	// let where = params.id 
	// 	? {where: {id: params.id  }} 
	// 	: { where: {}}
	// params = {defaults: {...params},...where};
	// Modifier.findOrCreate(params)
	// 	.then((result) => {
	// 		resolve({...result[0],...{created: result[1]}});
	// 	})
	// 	.catch(e => {
	// 		console.log(`Failed createOrUpate: ${e.message || e}`);
	// 		reject(e);
	// 	});
});

module.exports = Modifier;

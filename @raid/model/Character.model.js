const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING,
		// unique: true,
		// validate: {
		// 	// We require usernames to have length of at least 3, and
		// 	// only use letters, numbers and underscores.
		// 	is: /^\w{3,}$/
		// }
	}
	, stars: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 1,
		minValue: 1,
		maxValue: 6
	}
	, level: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 1,
		minValue: 1,
		maxValue: 60,
	}
	, thumbnail: {
		allowNull: true,
		type: DataTypes.STRING
	}
	, HP: {
		allowNull: false,
		type: DataTypes.BIGINT,
		defaultValue: 0
	}
	, Attack: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0
	}
	, Defense: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0
	}
	, Speed: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0
	}
	, CritRate: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0
	}
	, CritDamage: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0
	}
	, Accuracy: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0
	}
	, Resist: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0
	}
};

class Character extends Model { }
Character.init(schema, { sequelize }, { timestamps: false });

Character.findAllEager = (where) => Character.findAll(_.extend({ include: [{ all: true }] }, where));
Character.findOneEager = (where) => Character.findOne(_.extend({ include: [{ all: true }] }, where));

Character.associate = (models) => {
	Character.hasMany(models.Artifact);
	Character.belongsTo(models.Player);
	console.log('Associated Characters!');
}

module.exports = Character;

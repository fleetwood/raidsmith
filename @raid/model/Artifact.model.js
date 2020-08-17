const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, icon: {
		allowNull: true,
		type: DataTypes.STRING
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
		defaultValue: 0
	}
};

class Artifact extends Model { }
Artifact.init(schema, { sequelize }, { timestamps: false });

Artifact.findAllEager = (where) => Artifact.findAll(_.extend({ include: [{ all: true }]}, where));
Artifact.findOneEager = (where) => Artifact.findOne(_.extend({ include: [{ all: true }]}, where));

Artifact.associate = (models) => {
	Artifact.hasOne(models.Modifier, { 
		as: 'PrimaryStat'
	});
	Artifact.hasMany(models.Modifier, { 
		as: 'SubStats'
	});
	Artifact.belongsTo(models.Set);
	console.log('Associated Artifacts!');
}

module.exports = Artifact;

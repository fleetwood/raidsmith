const _ = require('underscore');
const { sequelize, Model, DataTypes} = require('./../../db');
const schema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	}
	, name: {
		allowNull: false,
		type: DataTypes.STRING,
	}
	, icon: {
		allowNull: true,
		type: DataTypes.STRING
	}
	, stars: {
		allowNull: false,
		default: 2,
		type: DataTypes.INTEGER
	}
	, level: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
};

class Artifact extends Model {}
Artifact.define = () => Artifact.init(schema,{sequelize});

Artifact.inclusions = [];
Artifact.addToIncludes = (model) => {
	if (Array.isArray(model)) {
		model.forEach(m => Artifact.addToIncludes(m));
		return;
	}
    if (!_.contains(Artifact.inclusions, model)) {
        Artifact.inclusions.push(model);
    }
}

Artifact.findAllEager = (where) => Artifact.findAll(_.extend({ include: Artifact.inclusions }, where));
Artifact.findOneEager = (where) => Artifact.findOne(_.extend({ include: Artifact.inclusions }, where));

module.exports = Artifact;

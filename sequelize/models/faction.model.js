const _ = require('underscore');
const { sequelize, Model, DataTypes} = require('../../db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	}
};

class Faction extends Model {}
Faction.define = () => Faction.init(schema, {sequelize});

Faction.inclusions = [];
Faction.addToIncludes = (model) => {
	if (Array.isArray(model)) {
		model.forEach(m => Faction.addToIncludes(m));
		return;
	}
    if (!_.contains(Faction.inclusions, model)) {
        Faction.inclusions.push(model);
    }
}

Faction.findAllEager = (where) => Faction.findAll(_.extend({ include: Faction.inclusions }, where));
Faction.findOneEager = (where) => Faction.findOne(_.extend({ include: Faction.inclusions }, where));

module.exports = Faction;

const _ = require('underscore');
const { sequelize, Model, DataTypes} = require('./../../db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	}
};

class Rarity extends Model {}
Rarity.define = () => Rarity.init(schema, {sequelize});

Rarity.inclusions = [];
Rarity.addToIncludes = (model) => {
	if (Array.isArray(model)) {
		model.forEach(m => Rarity.addToIncludes(m));
		return;
	}
    if (!_.contains(Rarity.inclusions, model)) {
        Rarity.inclusions.push(model);
    }
}

Rarity.findAllEager = (where) => Rarity.findAll(_.extend({ include: Rarity.inclusions }, where));
Rarity.findOneEager = (where) => Rarity.findOne(_.extend({ include: Rarity.inclusions }, where));

module.exports = Rarity;

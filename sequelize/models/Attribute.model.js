const _ = require('underscore');
const { sequelize, Model, DataTypes} = require('./../../db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING
	}
}

class Attribute extends Model {};
Attribute.define = () => Attribute.init(schema, {sequelize});

Attribute.inclusions = [];
Attribute.addToIncludes = (model) => {
	if (Array.isArray(model)) {
		model.forEach(m => Attribute.addToIncludes(m));
		return;
	}
    if (!_.contains(Attribute.inclusions, model)) {
        Attribute.inclusions.push(model);
    }
}

Attribute.findAllEager = (where) => Attribute.findAll(_.extend({ include: Attribute.inclusions }, where));
Attribute.findOneEager = (where) => Attribute.findOne(_.extend({ include: Attribute.inclusions }, where));

module.exports = Attribute;

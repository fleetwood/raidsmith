const { Model, DataTypes } = require('sequelize');
const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	}
};

class Rarity extends Model {}
Rarity.inclusions = [];
Rarity.addToIncludes = (model) => {
    if (!_.contains(Rarity.inclusions, model)) {
        Rarity.inclusions.push(model);
    }
}

module.exports = (sequelize) => sequelize.define('Rarity', schema);

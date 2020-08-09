const _ = require('underscore');
const { sequelize, Model, DataTypes} = require('./../../db');

const schema = {
	emailAddress: {
        allowNull: false,
        primaryKey: true,
        unique: "idEmailAddressConstraint",
		type: DataTypes.STRING
    }
	, thumb: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, historyId: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, access_token: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, refresh_token: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, token_type: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, expiry_date: {
		allowNull: true,
		type: DataTypes.BIGINT
    }
};

class Player extends Model {}
Player.define = () => Player.init(schema, {sequelize});

Player.inclusions = [];
Player.addToIncludes = (model) => {
	if (Array.isArray(model)) {
		model.forEach(m => Player.addToIncludes(m));
		return;
	}
    if (!_.contains(Player.inclusions, model)) {
        Player.inclusions.push(model);
    }
}
Player.name = Player.emailAddress ? Player.emailAddress.replace('@gmail.com','') : 'Player';

// Player.name = Player.emailAddress.replace('@gmail.com','');
Player.findAllEager = (where) => Player.findAll(_.extend({ include: Player.inclusions }, where));
Player.findOneEager = (where) => Player.findOne(_.extend({ include: Player.inclusions }, where));
// Player.upsertByEmail = (values) => new Promise((resolve, reject) => {
//     Player.findOne({where: {emailAddress: values.emailAddress}})
//         .then(player => {
//             player.update(values)
//                 .then(p => {
//                     resolve.p;
//                 })
//         })
//         .catch(e => {

//         })
//     return Player.upsert({where: {emailAddress: values.emailAddress}, returning: true}, values)
//         .then(player => {
//             resolve(player)
//         })
//         .catch(e => {
//             console.log(e);
//             reject(e);
//         });
// });
module.exports = Player;

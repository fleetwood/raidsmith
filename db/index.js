const { Sequelize, Model, DataTypes } = require('sequelize');
//TODO: move db to postgres
//TODO: move config to env
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db/data/db.sqlite',
	logQueryParameters: true,
	benchmark: true
});

module.exports = {
    Sequelize,
    Model,
    DataTypes,
    sequelize
}
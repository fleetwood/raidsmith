const { pg } = require('./../config');
const { Sequelize, Model, DataTypes } = require('sequelize');
//TODO: move db to postgres
//TODO: move config to env
const sequelize = new Sequelize(
    pg.db
    , pg.login
    , pg.secret
    , {
        host: pg.host
	    , dialect: 'postgres'
	    , logQueryParameters: pg.logQuery
	    , benchmark: true
});

module.exports = {
    Sequelize,
    Model,
    DataTypes,
    sequelize
}
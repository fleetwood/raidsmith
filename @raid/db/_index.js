const { Sequelize, Model, DataTypes } = require('sequelize');

const init = (config) => {
    const sequelize = new Sequelize(
        config.db
        , config.login
        , config.secret
        , {
            host: config.host
            , dialect: 'postgres'
            , logQueryParameters: config.logQuery
            , benchmark: true
    });
    return {
        Sequelize,
        Model,
        DataTypes,
        sequelize
    };
}

module.exports = (config) => init(config);
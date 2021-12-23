const { Sequelize, DataTypes, Model} = require('sequelize');
//Here is the database model
module.exports = (sequelize, DataTypes) => sequelize.define('shops', {
    shopName: {
        type: Sequelize.STRING,
        unique: true,
    },
    xCoord: Sequelize.INTEGER,
    yCoord: Sequelize.INTEGER,
    zCoord: Sequelize.INTEGER,
    items: Sequelize.TEXT,
    shopOwners: Sequelize.STRING,

});
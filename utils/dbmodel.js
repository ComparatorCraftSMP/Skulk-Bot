const { Sequelize, DataTypes, Model} = require('sequelize');
const { Client, Intents, Collection } = require('discord.js');
const { clientId, guildId} = require('../config.json');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//Here is the database model
const shops = sequelize.define('shops', {
    shopName: {
        type: DataTypes.STRING,
        unique: true,
    },
    xCoord:{ 
        type: DataTypes.INTEGER
    },
    yCoord: {
        type: DataTypes.INTEGER
    },
    zCoord: {
        type: DataTypes.INTEGER
    },
    items: {
        type: DataTypes.TEXT
    },
    shopOwners: {
        type: DataTypes.STRING
    }

});

module.exports = { shops }
//This syncs the shops in the database when the bot is  started
client.once('ready', ()=>{
    shops.sync({ force: true });
})
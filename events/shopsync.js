const { SlashCommandStringOption } = require("@discordjs/builders")

//This event syncs the table 
module.exports = {
    name: 'ready',
	once: true,
    execute (client) {
        shops.sync();
    }
}
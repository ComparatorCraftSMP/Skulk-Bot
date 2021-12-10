const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('createshop')
        .setDescription('This command registers your shop and it is how you add your shop to our list.')
        .addStringOption(option => option.setName('Shop Name').setDescription('Put your shops name'))
        .addIntegerOption(option => option.setName('X coordinate').setDescription('Put the shops x coordinate'))
        .addIntegerOption(option => option.setName('Y coordinate').setDescription('Put the shops y coordinate'))
        .addIntegerOption(option => option.setName('Z coordinate').setDescription('Put the shops z coordinate'))
        .addStringOption(option => option.setName('Items').setDescription('Add all your items, separate them by comma'))
        .addUserOption(option => option.setName('Shop owners').setDescription('Put the shops owners')),

    async execute(interaction){
        /*
        const embed = new MessageEmbed()
            .setColor('#9542f5')
            .setTitle(CommandInteractionOptionResolver.getString('Shop Name'))
            .setDescription(``) */
        await interaction.reply('You registered a shop, wow your so cool');
    },

}
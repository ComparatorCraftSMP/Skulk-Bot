const {SlashCommandBuilder, SlashCommandStringOption} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('announce')
        .setDescription('this sends an embed in the channel you choose')
        .addChannelOption(option => option.setName('channel').setDescription('this is the channel that the announcement will be sent in'))


}
const {SlashCommandBuilder, SlashCommandStringOption} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver, Message} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('announce')
        .setDescription('this sends an embed in the channel you choose')
        .addChannelOption(option => option.setName('channel').setDescription('this is the channel that the announcement will be sent in'))
        .addRoleOption(option => option.setName('role').setDescription('this is the role that will be pinged'))
        .addStringOption(option => option.setName('title').setDescription('this is the title of the announcement'))
        .addStringOption(option => option.setName('description').setDescription('this is the description of the announcement')),
    
        
    async execute(interaction) {
        const embed = new MessageEmbed()
                      .setColor('AQUA') 
                      .setTitle(interaction.options.getString('title')) 
                      .setDescription(interaction.options.getString('description'))
                      .thumbnail(client.user.avatarURL())
        
        const channel = interaction.options.getChannel('channel')

        channel.send({embed: [embed]})
    }
}

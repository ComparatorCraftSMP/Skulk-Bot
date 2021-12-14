const {SlashCommandBuilder, SlashCommandStringOption} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver} = require('discord.js');
const { Sequelize, shops} = require('sequelize');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('createshop')
        .setDescription('This command registers your shop and it is how you add your shop to our list.')
        .addStringOption(option => option.setName('shop_name').setDescription('Put your shops name'))
        .addIntegerOption(option => option.setName('xcoordinate').setDescription('Put the shops x coordinate'))
        .addIntegerOption(option => option.setName('ycoordinate').setDescription('Put the shops y coordinate'))
        .addIntegerOption(option => option.setName('zcoordinate').setDescription('Put the shops z coordinate'))
        .addStringOption(option => option.setName('items').setDescription('Add all your items, separate them by comma'))
        .addUserOption(option => option.setName('shop_owners').setDescription('Put the shops owners')),

    async execute(interaction){
        
        const embed = new MessageEmbed()
                
                    .setColor('#4feb34')
                    .setTitle(`${interaction.options.getString('shop_name')} has been added`)
                    .setDescription(`Shop Name: ${interaction.options.getString('shop_name')} \n Coordinates: X:${interaction.options.getInteger('xcoordinate')} Y:${interaction.options.getInteger('ycoordinate')} Z:${interaction.options.getInteger('zcoordinate')} \n Items: ${interaction.options.getString('items')} \n Shop Owners: ${interaction.options.getUser('shop_owners')}`) 
                    
        try {
            const shop = await shops.create({
                shopName: interaction.options.getString('shop_name'),
                xCoord: interaction.options.getInteger('xcoordinate'),
                yCoord: interaction.options.getInteger('ycoordinate'),
                zCoord: interaction.options.getInteger('zcoordinate'),
                items: interaction.options.getString('items'),
                shopOwners: interaction.User.username,
            })

            await interaction.reply({embeds: [embed]})
        }
        catch(error) {
            if(error.name === 'SequilizeUniqueConstraintError'){
                return interaction.reply('````diff\n-That shop already exists\n```')
            }

            return interaction.reply('```diff\n-Something went wrong adding this shop\n```')
        }

        
       

        
    },

}
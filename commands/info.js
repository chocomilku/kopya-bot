const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageButton } = require('discord.js')
const paginationEmbed = require('discordjs-button-pagination')
const info = require('../constants')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('All information about this bot.'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor(info.color[1])
            .setTitle('Commands')
            .setAuthor(info.name, info.picURL, info.url)
            .addFields(
                {name: '/kopya', value: 'Searches your question to brainly.ph and returns the answer'},
                {name: '/info', value: 'Shows this Embed for all information about this bot'},
            )
        const embed2 = new MessageEmbed()
            .setColor(info.color[1])
            .setTitle('Changelog')
            .setAuthor(info.name, info.picURL, info.url)
            .addFields(
                {name: 'v0.9.1', value: 'updated code'},
                {name: 'v0.9', value: 'added markdown styling'},
                {name: 'v0.8', value: 'added pagination to info'},
                {name: 'v0.7', value: 'added embeds to errors\nadded this versioning'},
                {name: 'v0.6', value: 'added error handling'},
                {name: 'v0.5', value: 'replies answer to the user'},
                {name: 'v0.1', value: 'script to fetch answers are working'},
            )

        const embed3 = new MessageEmbed()
            .setColor(info.color[1])
            .setTitle('About')
            .setAuthor(info.name, info.picURL, info.url)
            .addFields(
                {name: 'Author', value: info.authorDiscord},
                {name: 'Github Link', value: info.url},
            )
        
        const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("Previous")
        .setStyle("DANGER");

        const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("Next")
        .setStyle("SUCCESS");
            
        const pages = [embed, embed2, embed3]
        const buttonList = [button1, button2]
        const timeout = 120000
        paginationEmbed(interaction, pages, buttonList, timeout);
    }
}
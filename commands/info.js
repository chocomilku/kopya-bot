const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageButton } = require('discord.js')
const paginationEmbed = require('discordjs-button-pagination')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('All information about this bot.'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('WHITE')
            .setTitle('Commands')
            .setAuthor('kopyahan Bot', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://github.com/chocomilku/kopya-bot')
            .addFields(
                {name: '/kopya', value: 'Searches your question to brainly.ph and returns the answer'},
                {name: '/info', value: 'Shows this Embed for all information about this bot'},
            )
        const embed2 = new MessageEmbed()
            .setColor('WHITE')
            .setTitle('Changelog')
            .setAuthor('kopyahan Bot', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://github.com/chocomilku/kopya-bot')
            .addFields(
                {name: 'v0.8', value: 'added pagination'},
                {name: 'v0.7', value: 'added embeds to errors\nadded this versioning'},
                {name: 'v0.6', value: 'added error handling'},
                {name: 'v0.5', value: 'replies answer to the user'},
                {name: 'v0.1', value: 'script to fetch answers are working'},
            )

        const embed3 = new MessageEmbed()
            .setColor('WHITE')
            .setTitle('About')
            .setAuthor('kopyahan Bot', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://github.com/chocomilku/kopya-bot')
            .addFields(
                {name: 'Author', value: 'chocomilku#0437'},
                {name: 'Github Link', value: 'https://github.com/chocomilku/kopya-bot'},
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
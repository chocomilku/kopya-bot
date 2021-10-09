const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

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
                {name: '/info', value: 'Shows this Embed for information and Changelogs to this Bot'},
            )
        await interaction.reply({ embeds: [embed]})
    }
}
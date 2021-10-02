const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const { search } = require('../brainly')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kopya')
        .setDescription('Searches to brainly.ph from your query')
        .addStringOption(option =>
            option.setName('search')
                .setDescription('Search Question')
                .setRequired(true)),
    async execute(interaction) {
        const query = interaction.options.getString('search')
        const res = await search(query)
          const embed = new MessageEmbed()
            .setColor('#34B785')
            .setTitle('kopya-bot')
            .setDescription(`"${interaction.options.getString('search')}"`)
            .setTimestamp(res.lastActivity)
            .setFooter(`Answered by userID: ${res.answerAuthorId}`)
            .addFields(
                {name: 'Question', value: res.question},
                {name: 'Subject', value: res.subject, inline: true},
                {name: 'Grade', value: res.grade, inline: true},
                {name: 'Question By', value: res.questionAuthor, inline: true},
                {name: 'Question Link', value: res.link, inline: true},
                {name: 'Answer', value: res.answerFormatted},
            )
            await interaction.reply({ embeds: [embed] })
    }
}
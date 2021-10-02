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
        const data = search(interaction.options.getString('search'))
          const embed = new MessageEmbed()
            .setColor('#34B785')
            .setTitle('kopya-bot')
            .setDescription(`"${interaction.options.getString('search')}"`)
            .setTimestamp('2021-04-14T07:40:15.000Z')
            .setFooter('Answered by userID')
            .addFields(
                {name: 'Question', value: 'A rectangular box is 5 cm long, 3 cm wide and 4 cm high. Find its surface area.'},
                {name: 'Subject', value: 'Math', inline: true},
                {name: 'Grade', value: 'Junior High School', inline: true},
                {name: 'Question By', value: 'username', inline: true},
                {name: 'Question Link', value: 'linkHere', inline: true},
                {name: 'Answer', value: 'Answer here'},
            )
            await interaction.reply({ embeds: [embed] })
    }
}
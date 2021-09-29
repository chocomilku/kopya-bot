const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kopya')
        .setDescription('Searches to brainly.ph from your query')
        .addStringOption(option =>
            option.setName('search')
                .setDescription('Search Question')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(interaction.options.getString('search'))
    }
}
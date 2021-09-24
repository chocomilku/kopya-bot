const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('All information about this bot.'),
    async execute(interaction) {
        await interaction.reply('kopyahan Bot')
    }
}
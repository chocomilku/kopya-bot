const fs = require('fs')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config()
const clientId = process.env.clientId
const guildId = process.env.guildId
const token = process.env.TOKEN

const commands = []
const commandFiles = fs.readdirSync('./commands')
  .filter(file => 
    file.endsWith('.js')
    )

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  commands.push(command.data.toJSON())
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing slash commands.')

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		)
		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		)

		console.log('Successfully reloaded slash commands.')
	} catch (error) {
		console.error(error)
	}
})
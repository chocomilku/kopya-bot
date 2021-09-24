const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config()
const clientId = process.env.clientId
const guildId = process.env.guildId
const token = process.env.TOKEN

const commands = [
	new SlashCommandBuilder().setName('kopya').setDescription('Searches to brainly.ph from your query.'),
	new SlashCommandBuilder().setName('info').setDescription('All information about this bot.')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

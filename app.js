require('dotenv').config()
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(process.env.TOKEN)
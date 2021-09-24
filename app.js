require('dotenv').config()
const { Client, Intents, Interaction } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
    console.log(`Ready!\n${client.user.tag} is Online`)
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { command } = interaction;

  if (command === "ping") {
    await interaction.reply('Pong!')
  } else if (command === "server") {
    await interaction.reply(`Server Info:\n Server Name: ${interaction.guild.name}\n Total Members: ${interaction.guild.memberCount}`)
  } else if (command === "user") {
    await interaction.reply(`Your tag: ${interaction.user.tag}`)
  }

})

client.login(process.env.TOKEN)
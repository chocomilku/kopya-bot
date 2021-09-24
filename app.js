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

  if (command === "kopya") {
    await interaction.reply('wip')
  } else if (command === "info") {
    await interaction.reply("kopyahan Bot")
  }

})

client.login(process.env.TOKEN)
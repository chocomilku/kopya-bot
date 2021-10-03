require('dotenv').config()
const fs = require('fs')
const { Client, Intents, Interaction, Collection } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const { search } = require('./brainly')

client.once("ready", () => {
    console.log(`Ready!\n${client.user.tag} is Online`)
})

client.commands = new Collection()
const commandFiles = fs.readdirSync('./commands')
  .filter(file => 
    file.endsWith('.js')
    )

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.data.name, command)
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error)
    await interaction.editReply({ content: `An Error has Occured. Please try Again\n${error}`, ephemeral: true })
  }

})

client.login(process.env.TOKEN)
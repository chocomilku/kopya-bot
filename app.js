require('dotenv').config()
const fs = require('fs')
const { Client, Intents, Collection, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
    console.log(`Ready!\n${client.user.tag} is Online\nCTRL+C to Stop`)
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
    const d = new Date();
    console.error(`${d.toLocaleString()}: ${error} [${interaction.options.getString('search')}]`)
    const embedError = new MessageEmbed()
      .setColor('#ff0033')
      .setTitle(`${error}`)
      .setTimestamp(d)
    await interaction.editReply({ content: `An Error has Occured. Please try again`, embeds: [embedError]})
  }

})

client.login(process.env.TOKEN)
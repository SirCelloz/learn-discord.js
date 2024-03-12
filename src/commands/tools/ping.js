const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('ping')
          .setDescription('return ping111!!11!'),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });

    const newMessage = `API latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}\n${client}`

    await interaction.editReply({
      content: newMessage
    });
  }
}
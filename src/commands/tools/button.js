const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('button')
          .setDescription('return button'),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId('sub-yt')
      .setLabel(`click me!`)
      .setStyle(ButtonStyle.Success);

      await interaction.reply({
        components: [new ActionRowBuilder().addComponents(button)]
      });
  }
}
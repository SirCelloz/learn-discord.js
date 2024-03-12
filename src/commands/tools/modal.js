const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputStyle,
  TextInputBuilder,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('modal')
    .setDescription('return modal'),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId('fav-color')
      .setTitle('fav-color');

      const textInput = new TextInputBuilder()
        .setCustomId('favColorInput')
        .setLabel(`What is your fav color?`)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);

      modal.addComponents(new ActionRowBuilder().addComponents(textInput));

      await interaction.showModal(modal);
  },
};

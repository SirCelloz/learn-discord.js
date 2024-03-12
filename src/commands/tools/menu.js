const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('menu')
    .setDescription('return menu'),
  async execute(interaction, client) {
    const menu = new StringSelectMenuBuilder()
      .setCustomId('sub-menu')
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
          new StringSelectMenuOptionBuilder({
            label: `opt 1`,
            value: `https://roblox.com`,
          }),
          new StringSelectMenuOptionBuilder({
            label: `opt 2`,
            value: `https://youtube.com`,
          })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};

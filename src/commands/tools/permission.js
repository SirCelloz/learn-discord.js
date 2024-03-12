const { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('permission')
          .setDescription('require permission')
          .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch()
      .catch(console.error);

    const testRole = await interaction.guild.roles.create({
      name: `test`,
      permissions: [PermissionsBitField.Flags.KickMembers]
    }).catch(console.error)

    if (roles.cache.has('')) {
      await interaction.deferReply({
        fetchReply: true
      });
    }else {
      
    }
  }
}
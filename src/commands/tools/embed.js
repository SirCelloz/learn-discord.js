const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('embed')
          .setDescription('return embed'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
        .setTitle('This is Embed')
        .setDescription('This is a very cool description')
        .setColor(0x18e1ee)
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
          url: `https://youtube.com`,
          iconURL: interaction.user.displayAvatarURL(),
          name: interaction.user.tag
        })
        .setFooter({
          iconURL: client.user.displayAvatarURL(),
          text: client.user.tag
        })
        .setURL(`https://youtube.com`)
        .addFields([
          {
            name: `Field 1`,
            value: `Field val 1`,
            inline: true
          },
          {
            name: `Field 2`,
            value: `Field val 2`,
            inline: true
          },
          {
            name: `Field 3`,
            value: `Field val 3`,
            inline: true
          },
        ]);

        await interaction.reply({
          embeds: [embed]
        })
  }
}
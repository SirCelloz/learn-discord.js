const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('reactor')
          .setDescription('return reactions'),
  async execute(interaction, client) {
    const message = await interaction.reply({
      content: `react here`,
      fetchReply: true,
    });

    // const emoji = client.guild.emojis.cache.find(( emoji ) => (emoji.id = '1216626305005780992'));

    /* const emoji1 = client.emojis.cache.find(( emoji ) => (emoji.id = '1216626305005780992'))

    message.react(emoji1);
    message.react('🙄');

    const filter =  ( reaction, user ) => {
      return reaction.emoji.name == '🙄' && user.id == interaction.user.id
    };

    const collector = message.createReactionCollector({ filter, time: 15000 });

    collector.on('collect', ( reaction, user ) => {
      console.log(`collect ${reaction.emoji.name} from ${user.tag}`);
    });

    collector.on('end', ( collected ) => {
      console.log(`collected ${collected.size} items`);
    }); */

    const filter = ( reaction, user ) => {
      return reaction.emoji.name === '😎' && user.id == interaction.user.id
    };

    message
      .awaitReactions({ filter, max: 4, time: 20000, errors: ['time'] })
      .then((collected) => console.log(collected.size))
      .catch((collected) => {
        console.log(`after twenty seconds only ${collected.size} out of 4 reached`)
      })
  }
}
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('profile')
          .setDescription('Return profile'),
  async execute(interaction, client) {
    // Create the button
    const profileButton = new ButtonBuilder()
      .setCustomId('roblox')
      .setLabel('My Roblox Profile')
      .setStyle(ButtonStyle.Success);

    // Reply with the message containing the button
    const message = await interaction.reply({
      content: 'Click the button to view your Roblox profile:',
      components: [new ActionRowBuilder().addComponents(profileButton)]
    });

    // Collect button interactions
    const collector = message.createMessageComponentCollector({
      componentType: 'BUTTON',
      time: 15000 // Time in milliseconds (15 seconds) for button interaction collection
    });

    // Handle button interactions
    collector.on('collect', async (buttonInteraction) => {
      // Check if the button was clicked by the user who invoked the command
      if (buttonInteraction.user.id === interaction.user.id) {
        // Disable the button
        profileButton.setDisabled(true);

        // Update the message to remove the button
        await buttonInteraction.update({
          content: 'Your Roblox profile has been disabled.',
          components: [] // Remove all components from the message
        });

        // Stop the button interaction collector
        collector.stop();
      } else {
        // If the button was clicked by another user, provide a response
        await buttonInteraction.reply({
          content: 'This button is not for you!',
          ephemeral: true // Make the response visible only to the user who clicked the button
        });
      }
    });

    // Handle collector end event (timeout)
    collector.on('end', () => {
      // If the collector times out, update the message to remove the button
      message.edit({
        content: 'The interaction has timed out.',
        components: [] // Remove all components from the message
      });
    });
  }
};

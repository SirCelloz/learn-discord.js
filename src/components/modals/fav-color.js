module.exports = {
  data: {
    name: `fav-color`,
  },
  async execute (interaction, client) {
    await interaction.reply({
      content: `your fav color is ${interaction.fields.getTextInputValue('favColorInput')} ?????`
    });
  }
}
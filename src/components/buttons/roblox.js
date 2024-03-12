module.exports = {
  data: {
    name: `roblox`,
  },
  async execute(interaction, client){
    await interaction.reply({
      content: `https://www.roblox.com/users/765140938/profile`
    });
  }
}
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`Ready!!11!! ${client.user.tag} is logged in and online`)
  }
}
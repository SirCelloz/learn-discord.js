const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
  client.handleCommands = async() => {
      const commandFolders = fs.readdirSync('./src/commands');
      for (const folder of commandFolders) {
        const commandFiles = fs
          .readdirSync(`./src/commands/${folder}`)
          .filter((file) => file.endsWith('.js'));

        const { commands, commandArray } = client;
        for (const file of commandFiles) {
          const command = require(`../../commands/${folder}/${file}`);
          commands.set(command.data.name, command);
          commandArray.push(command.data.toJSON());
          
          console.log(`Command ${command.data.name} has been passed through the handlers`);
        }
      }

      const clientId = '1216290793921318992';
      const guildId = '1212198492907249715';
      const rest = new REST({ version: '9' }).setToken(process.env.token);

      try {
        console.log('Started refreshing app (/) commands.');
        
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
          body: client.commandArray,
        });

        console.log('Successfully reloaded app (/) commands.')
      } catch (error) {
        console.log(error);
      }
  };
};
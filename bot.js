require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ] 
});

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', async message => {
    if (message.author.username === 'Aldrost') {
        message.react('🥚');
		console.log('🥚');
    }
});

client.login(process.env.TOKEN);
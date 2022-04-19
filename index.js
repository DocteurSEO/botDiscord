const { Client, Intents, Message } = require('discord.js');
require('dotenv').config()
 
const commandHandler = require('./commands');
 
 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('🤖 Beep beep! I am ready!');
});

client.on('message', commandHandler);

client.login(process.env['DIS']);


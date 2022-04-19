const video = require('./video');
const code = require('./code');
const guildID = process.env['GUILD'] 
const channelID = process.env['CHANNEL']

const commands = {
  video,
  code
};

module.exports = async (msg) => {

  
  if (msg.channelId == channelID) {
    
    const args = msg.content.split(' ');
    console.log(args)
    if (args.length == 0 ) return;
    const command = args.shift()
    console.log(command)
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};
const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{
client.on("message", (message) => {

    if(message.content.startsWith(`${prefix}say`)) {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You need admin to use this command!')
      var text = message.content.split(' ').slice(1).join(' ');
      message.channel.send(text)
      message.delete().catch(e =>{});
      message.channel.stopTyping()
    }
});
  client.on("message", message => {
      const member = message.author.username
  });
}
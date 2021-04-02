const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

  
     if(command === `${prefix}uptime`) {

     // client.uptime is in millseconds
     // this is just maths, I won't explain much of it
     // % is modulo, AKA the remainder of a division
     let days = Math.floor(client.uptime / 86400000);
     let hours = Math.floor(client.uptime / 3600000) % 24;
     let minutes = Math.floor(client.uptime / 60000) % 60;
     let seconds = Math.floor(client.uptime / 1000) % 60;
    
    
     message.channel.send(`**__Uptime__** \n${days}d ${hours}h ${minutes}m ${seconds}s`)
   
    
  }

})
}
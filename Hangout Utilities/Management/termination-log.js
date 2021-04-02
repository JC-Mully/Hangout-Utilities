const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
      

        if(command === `${prefix}termination`) {
           const embed2 = new discord.MessageEmbed()

           .setAuthor(`${message.author.username}`)
           .setTitle(`Command Used!`)
           .setDescription(`The \`termination\` command was used by ${message.author} in ${message.channel}`)
           .addField(`Command content`, `${message.content}`)
           .setFooter(`- Hangout Utilities System`)
           .setTimestamp( )
           .setColor('000000')

           let channel = message.client.channels.cache.get("826212208904110130")
           channel.send(embed2)
        }
    })
}
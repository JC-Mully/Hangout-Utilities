const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
      

        if(command === `${prefix}suggest`) {
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setTitle(`New Suggestion!`)
            .setDescription(`A new suggestion from ${message.author} is here.`)
            .addField(`Suggestion`, `${message.content}.`)
            .addField(`Server`, `${message.guild.name}.`)
            .addField(`User`, `${message.author} | ${message.author.id}`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')
            
            message.channel.send(`**Suggestion Sent**`)
            let channel = message.client.channels.cache.get("826135447846912020")
           channel.send(embed)
        }
    })
}
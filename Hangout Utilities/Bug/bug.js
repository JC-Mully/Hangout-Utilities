const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
      

        if(command === `${prefix}bug-report`) {
            let dUser = message.guild.member(message.mentions.users.first())
            let dMessage = args.join(" ").slice(22);
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setTitle(`Bug Report!`)
            .setDescription(`${message.author} has sent in a bug report.`)
            .addField(`Bug Report`, `${message.content}.`)
            .addField(`Server`, `${message.guild.name}.`)
            .addField(`User`, `${message.author} | ${message.author.id}`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')
            
            message.channel.send(`**Bug Report Sent**`)
            let channel = message.client.channels.cache.get("826212424088682506")
           channel.send(embed)
        }
    })
}
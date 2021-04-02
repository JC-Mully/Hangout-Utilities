const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}demotion`) {
            let dUser = message.guild.member(message.mentions.users.first())
            let dMessage = args.join(" ").slice(22);
            const embed = new discord.MessageEmbed()

            .setTitle(`Demotion`)
            .setDescription(`You have been demoted in ${message.guild.name} by ${message.author}.`)
            .addField(`Reason`, `${dMessage}.`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')
            if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Sorry you do not have the right permission to run this command.')

            dUser.send(embed)
            
            const embed2 = new discord.MessageEmbed()

            .setTitle(`Demotion Sent!`)
            .setDescription(`Demotion sent from ${message.author} to ${dUser}.`)
            .addField(`Reason`, `${dMessage}.`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')

            message.channel.send(embed2)

            const embed3 = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setTitle(`Demotion!`)
            .setDescription(`${dUser} has been demoted by ${message.author}!`)
            .addField(`Reason`, `${dMessage}`)
            .setFooter(`- Hangout Utilities System`)
            .setColor('000000')
            .setTimestamp( )

            let channel = message.client.channels.cache.get("825922426524401668")
           channel.send(embed3)

        }

    })
}
const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}bugfeedback`) {
            let dUser = message.guild.member(message.mentions.users.first())
            let dMessage = args.join(" ").slice(22);
            const embed = new discord.MessageEmbed()

            .setTitle(`Bug Report Feedback!`)
            .setDescription(`Hey ${dUser}, ${message.author} has left you some feedback on your bug-report.`)
            .addField(`Feedback`, `${dMessage}.`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Sorry you do not have the right permission to run this command.')

            dUser.send(embed)
            
            const embed2 = new discord.MessageEmbed()

            .setTitle(`Sent!`)
            .setDescription(`Bug Report Feedback sent to ${dUser}!`)
            .addField(`Feedback`, `${dMessage}.`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')

            message.channel.send(embed2)

        }

    })
}
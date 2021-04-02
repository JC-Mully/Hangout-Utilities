const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}notice`) {
            let dUser = message.guild.member(message.mentions.users.first())
            let dMessage = args.join(" ").slice(22);
            const embed = new discord.MessageEmbed()

            .setTitle(`Notice`)
            .setDescription(`You have received a notice in ${message.guild.name} by ${message.author}.`)
            .addField(`Notice Information`, `${dMessage}.`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')
            if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Sorry you do not have the right permission to run this command.')

            dUser.send(embed)

            const embed2 = new discord.MessageEmbed()

            .setTitle(`Notice Sent!`)
            .setDescription(`The notice has been sent to ${dUser} by ${message.author}.`)
            .addField(`Notice Information`, `${dMessage}.`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')

            message.channel.send(embed2)

        }

    })
}
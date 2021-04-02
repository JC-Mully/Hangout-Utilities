const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}intro`) {
            let dUser = message.guild.member(message.mentions.users.first())
            let dMessage = args.join(" ").slice(22);
            const embed = new discord.MessageEmbed()

            .setTitle(`Welcome!`)
            .addField(`Thank you for contancting ${message.guild.name}'s ticket system!`, `How can we help you today ${dUser}?`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Sorry you do not have the right permission to run this command.')

            message.delete().catch(e =>{});
            message.channel.send(embed)

        }

    })
}
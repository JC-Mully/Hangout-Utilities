const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}userinfo`) {
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle(`${message.author.username}'s Userinfo`)
            .addField(`Username`, `${message.author.username}`)
            .addField(`ID`, `${message.author.id}`)
            .addField(`Mention`, `${message.author}`)
            .addField(`Creation Date`, `${message.author.createdAt}`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')

            message.channel.send(embed)

        }

    })
}
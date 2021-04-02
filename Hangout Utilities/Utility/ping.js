const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}ping`) {
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle(`Pong!`)
            .addField(`Ping`, `It took me \`${client.ws.ping}\` to respond!`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')

            message.channel.send(embed)

        }

    })
}
const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}botinfo`) {
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle(`Hangout Utilities's Botinfo`)
            .addField(`Name`, `Hangout Utilities`)
            .addField(`Prefix`, `\`-\``)
            .addField(`Commands`, `31`)
            .addField(`Developer`, `<@680394000368533525>`)
            .addField(`Support Server`, `Coming Soon....`)
            .addField(`Server Count`, `${client.guilds.cache.size}`)
            .addField(`Channel Count`, `${client.channels.cache.size} (Including Category's)`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')

            message.channel.send(embed)

        }

    })
}
const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}serverinfo`) {
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle(`${message.guild.name}'s Serverinfo`)
            .addField(`Creation Date`, `${message.guild.createdAt}`)
            .addField(`Member Count`, `${message.guild.memberCount}`)
            .addField(`Server Owner`, `${message.guild.owner}, ${message.guild.ownerID}`)
            .addField(`Region`, `${message.guild.region}`)
            .addField(`Emoji Count`, `${message.guild.emojis.cache.size}`)
            .addField(`Role Count`, `${message.guild.roles.cache.size}`)
            .addField(`Channel Count`, `${message.guild.channels.cache.size} (Including Category's)`)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')

            message.channel.send(embed)

        }

    })
}
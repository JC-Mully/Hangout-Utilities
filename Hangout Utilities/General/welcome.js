const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}welcome`) {
            let dUser = message.guild.member(message.mentions.users.first())
            let dMessage = args.join(" ").slice(22);
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle(`Hello! 👋`)
            .setDescription(`${dUser} **welcome to ${message.guild.name}!** \nWe are happy your here. We want to make sure you are safe and happy here. \nIf you have any questions feel free to ask us!`)
            .setTimestamp( )
            .setColor('000000')

            message.delete().catch(e =>{});
            message.channel.send(embed)

        }

    })
}
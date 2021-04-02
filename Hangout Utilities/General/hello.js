const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}hello`) {
            let dUser = message.guild.member(message.mentions.users.first())
            let dMessage = args.join(" ").slice(22);
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setTitle(`Hello! 👋`)
            .addField(`Hello`, `How are you today ${dUser}?`)
            .setTimestamp( )
            .setColor('000000')

            message.delete().catch(e =>{});
            message.channel.send(embed)

        }

    })
}
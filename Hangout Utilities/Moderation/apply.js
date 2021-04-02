const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}apply`) {
            let dUser = message.guild.member(message.mentions.users.first())
            let dMessage = args.join(" ").slice(22);
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setTitle(`Application`)
            .setDescription(`**_How to apply._** \nMessage a SHR your application and they will reply soon weather you have been accepted or denied.`)
            .addField(`\nGeneral Questions`, `You must fill out all the questions in order to apply. \nAsking for your application to be read is a automatic deny.`)
            .addField(`Discord name & ID:`, `*You must provide your Discord name & ID.*`)
            .addField(`Age:`, `*You must be 13 or older to apply.*`)
            .addField(`When did you join?`, `*Please state when you joined the server.*`)
            .addField(`Messages Sent:`, `*You must have 500+ messages to apply.*`)
            .addField(`Why do you want to become staff?`, `*Must provide 4+ sentences.*`)
            .addField(`Why should we choose you?`, `*Must provide 4+ sentences.*`)
            .addField(`How much experience do you have?`, `*5+ sentences. Role: Date: Experience:*`)
            .addField(`\nSituational Questions`, `You must put all your effort into these questions.`)
            .setTimestamp( )
            .setColor('000000')
            if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Sorry you do not have the right permission to run this command.')

            message.channel.send(embed)

        }

    })
}


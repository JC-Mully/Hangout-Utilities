const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


       if(command === `${prefix}warn`) {
        let dUser = message.guild.member(message.mentions.users.first())
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`${message.author} \`ERROR\` \n**Invalid Permissions** \n You don't have permission \`MANAGE_MESSAGES\`, therefore you cannot use the \`WARN\` command.`)
        if(!dUser) return message.channel.send(`${message.author} \`ERROR\` \n**Invalid Member** \nI cannot find this user in my database, please make sure they are in the server.`)
        let dMessage = args.join(" ").slice(22);
        const embed = new discord.MessageEmbed()
        
        .setTitle(`Warned!`)
        .setDescription(`You were warned in ${message.guild.name} by ${message.author}.`)
        .addField(`Reason`, `${dMessage}.`)
        .setFooter(`- Hangout Utilities System`)
        .setTimestamp( )
        .setColor('000000')


        dUser.send(embed)
          const warn = new discord.MessageEmbed()

          .setTitle(`Warned!`)
          .setDescription(`${dUser} has been warned by ${message.author}.`)
          .addField(`Reason`, `${dMessage}.`)
          .setFooter(`- Hangout Utilities System`)
          .setTimestamp( )
          .setColor('#000000')


          message.channel.send(warn)
       }

    })
}

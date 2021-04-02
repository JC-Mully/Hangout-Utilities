const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);



if(command === `${prefix}dm`) {
    let dUser = message.guild.member(message.mentions.users.first())
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`${message.author} \`ERROR\` \n**Invalid Permissions** \n You don't have permission \`MANAGE_MESSAGES\`, therefore you cannot use the \`DM\` command.`)
    if(!dUser) return message.channel.send(`${message.author} \`ERROR\` \n**Invalid Member** \nI cannot find this user in my database, please make sure they are in the server.`)
    let dMessage = args.join(" ").slice(22);
      const dm = new discord.MessageEmbed()

      .setTitle(`DM Received!`)
      .setDescription(`${dUser}, you have been DM'ed by ${message.author}.`)
      .addField(`Content`, `${dMessage}.`)
      .setFooter(`- Sent From ${message.guild.name}`)
      .setTimestamp( )
      .setColor(`000000`)

      dUser.send(dm)

      const embed = new discord.MessageEmbed()
    
    
      .setTitle(`DM Sent!`)
      .setDescription(`${dUser} has been DM'ed by ${message.author}`)
      .addField(`Content`, `${dMessage}.`)
      .setFooter(`- Hangout Utilities System`)
      .setTimestamp( )
      .setColor('000000')

      message.channel.send(embed)
  }

})
}
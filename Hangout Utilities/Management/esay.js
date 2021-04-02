const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        if(command === `${prefix}esay`) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You do not have the right permissions to use this command.')
            message.delete().catch(e =>{});
            const content = message.content.split(' ').slice(1).join(' ');
            const embed = new discord.MessageEmbed()
            .setAuthor(`${message.author.username}`)
            .setDescription(content)
            .setColor('000000')


            message.channel.send(embed)

    
    }
})
}

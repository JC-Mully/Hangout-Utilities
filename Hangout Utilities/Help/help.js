const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if(command === `${prefix}help`) {
            const embed = new discord.MessageEmbed()

            .setAuthor(`${message.author.username}`)
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle(`Help`)
            .setDescription(`Hello! My prefix is \`${prefix}\` and my name is \`Hangout Utilities\`! \nHere are my commands. \`<>\` Needed. \`[]\` Optional.`)
            .addField(`Utility`, `\`botinfo\` | \`ping\` | \`serverinfo\` | \`uptime\` | \`userinfo\``)
            .addField(`Ticket`, `\`done <user>\` | \`hold <user> <reason>\` | \`intro <user>\` | \`pts <user> \` | \`request <user>\``)
            .addField(`Suggestion`, `\`suggest <suggestion>\``)
            .addField(`Moderation`, `\`dm <user> <reason>\` | \`kick <user> <reason>\` | \`warn <user> <reason>\` | \`purge <amount>\` | \`partner <user> <ad>\` | \`apply\``)
            .addField(`Management`, `\`demotion <user> <reason>\` | \`esay <text>\` | \`notice <user> <reason>\` | \`promotion <user> <reason>\` | \`say <text>\` | \`termination <user> <reason>\``)
            .addField(`General`, `\`hello <user>\` | \`welcome <user>\``)
            .addField(`Bug`, `\`bug-report <bug>\``)
            .setFooter(`- Hangout Utilities System`)
            .setTimestamp( )
            .setColor('000000')

            message.channel.send(embed)
        }

    })
}
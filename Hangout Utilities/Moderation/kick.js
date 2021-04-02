const discord = require("discord.js")
const {prefix, token} = require('../config.json');

module.exports = (client)=>{

    client.on('message', message => {

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);


        if (!message.guild) return;
if (message.content.startsWith('-kick')) {
  if (!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send(`${message.author} \`ERROR\` \n**Invalid Permissions** \nYou do not have the permission \`KICK_MEMBERS\`, therefore you cannot use the \`KICK\` command.`)
const user = message.mentions.users.first();
if (user) {
  const member = message.guild.member(user);
    if (member) {
      member.kick("Optional reason that will display in the audit logs").then(() => {
        message.channel.send(`${message.author} \`SUCCESS\` \n**Kicked** \nSuccessfully kicked ${user.tag}.`);
      }).catch(err => {
        message.channel.send(`${message.author} \`ERROR\` \n **Unable to kick that member!**`);
        console.error(err);
        member.roles.cache.has('724113809249140787');
      });
    } else {
      message.channel.send(`\`ERROR\` \n**That user isn't in this guild!**`);
    }
} else {
  message.channel.send(`${message.author} \`ERROR\` \n**Invalid Input** \n\`USAGE\` - \`-kick {user} {reason}\` \n**__MAKE SURE THE USER IS IN THE GUILD!__**`);
  
}

}const swearWords = ["Nigga", "NIGGA", "nigga"];
if (swearWords.some(word => message.content.includes(word))) {
  const embed = new discord.MessageEmbed()
  .setTitle('Blacklisted word detected!')
  .setDescription("Stop saying these words! If you continue a staff member will go through with an offical warning.")
  .setFooter("This is an automated message by the Bot.")
  .setTimestamp()
  .setColor('000000')

message.delete().catch(e => {});
message.channel.send(embed)
}
    })
}


const discord = require ('discord.js')
const {  prefix, token } = require ('./config.json')
const client = new discord.Client();

const fetch = require("node-fetch")

// Utility

const uptime = require('./Utility/uptime');
const userinfo = require('./Utility/userinfo');
const serverinfo = require('./Utility/serverinfo')
const ping = require('./Utility/ping')
const botinfo = require('./Utility/botinfo');

// Help

const help = require('./Help/help');

// Moderation

const dm = require('./Moderation/dm');
const kick = require('./Moderation/kick');
const warn = require('./Moderation/warn');
const partner = require('./Moderation/partner');
const apply = require('./Moderation/apply');
const purge = require('./Moderation/purge');
const warnLog = require('./Moderation/warn-log');
const partnerLog = require('./Moderation/partner-log');
const purgeLog = require('./Moderation/purge-log');
const kicklog = require('./Moderation/kick-log');
const dmlog = require('./Moderation/dm-log');

// General

const welcome = require('./General/welcome');
const hello = require('./General/hello');

// Ticket

const request = require('./Ticket/request');
const pts = require('./Ticket/pts');
const intro = require('./Ticket/intro');
const hold = require('./Ticket/hold');
const done = require('./Ticket/done');

// Management

const demotion = require('./Management/demotion');
const notice = require('./Management/notice');
const promotion = require('./Management/promotion');
const termination = require('./Management/termination');
const esay = require('./Management/esay');
const say = require('./Management/say');
const demotionLog = require('./Management/demotion-log');
const noticeLog = require('./Management/notice-log');
const promotionLog = require('./Management/promotion-log');
const terminationLog = require('./Management/termination-log');
const esayLog = require('./Management/esay-log');
const sayLog = require('./Management/say-log');

// Bug

const bugfeedback = require('./Bug/bug-feedback');
const bugreport = require('./Bug/bug');
const bugreportlog = require('./Bug/bug-log');
const bugfeedbacklog = require('./Bug/bugfeedback-log');

// Suggestion

const suggest = require('./Suggestion/suggest');
const suggestionaccept = require('./Suggestion/suggestion-accept');
const suggestiondeny = require('./Suggestion/suggestion-deny');
const suggestLog = require('./Suggestion/suggest-log');
const suggestionacceptLog = require('./Suggestion/suggestionaccept-log');
const suggestiondenyLog = require('./Suggestion/suggestiondeny-log');


client.once('ready', () => {
    console.log(`${client.user.username} Online. ${client.users.cache.size} members. ${client.guilds.cache.size} servers. ${client.channels.cache.size} channels. ${client.emojis.cache.size} emojis.`)
});
client.on('ready', () => {
  client.user.setActivity(`-help`, { type: 'LISTENING'});
})

client.on('message', async message => {
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const member = message.author.username
  
    
    client.snipes = new Map()

    client.on('messageDelete', message => {

client.snipes.set(message.channel.id, {
content:message.content,
author:message.author.tag,
image:message.attachments.first() ? message.attachments.first().proxyURL : null
      })
})
    if(command === "meme") {
      let msg = await message.channel.send("Finding memes!!")
      fetch('http://meme-api.herokuapp.com/gimme')
      .then(res => res.json())
      .then(json => {
          let embed = new discord.MessageEmbed()
          .setTitle(json.title)
          .setImage(json.url)
          .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
      msg.edit(embed)
      })


}});


// Utility

botinfo(client)
ping(client)
serverinfo(client)
uptime(client)
userinfo(client)

// Help

help(client)

// Moderation

dm(client)
warn(client)
kick(client)
apply(client)
partner(client)
purge(client)
dmlog(client)
warnLog(client)
kicklog(client)
partnerLog(client)
purgeLog(client)

// General

welcome(client)
hello(client)

// Ticket

request(client)
pts(client)
intro(client)
hold(client)
done(client)

// Management

demotion(client)
notice(client)
promotion(client)
termination(client)
esay(client)
say(client)
demotionLog(client)
noticeLog(client)
promotionLog(client)
terminationLog(client)
esayLog(client)
sayLog(client)

// Bug

bugfeedback(client)
bugreport(client)
bugreportlog(client)
bugfeedbacklog(client)

// Suggestion

suggest(client)
suggestionaccept(client)
suggestiondeny(client)
suggestLog(client)
suggestionacceptLog(client)
suggestiondenyLog(client)


client.login(token)
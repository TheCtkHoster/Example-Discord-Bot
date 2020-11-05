const Discord = require('discord.js')
const config = require('../config.json');

exports.run = async (bot, message, args) => {
    let arg = message.content.split(" ").slice(1);
    const arg1 = arg.join(" ");
    if(!arg1) return message.channel.send(`Pls Type a report..\n\`Example: ${config.prefix}report Some Command Does'nt Work!\``);

    user = config.owner;

    const embed = new Discord.MessageEmbed()
    .setTitle(`New Report`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addField(`report:`, arg1)
    .setDescription(`Sender: <@${message.author.id}>\n\`Name: ${message.author.tag}\nUser ID: ${message.author.id}\nServer: ${message.guild.name}\nServer ID: ${message.guild.id}\``)

    message.channel.send('Successfuly send your report!').then(msg = bot.channels.cache.find(x => x.id === "761765411632971807").send(embed));
}

module.exports.help = {
    name: 'report',
    Description: `Type a report (don't Spamming)`,
    usage: `${config.prefix}report`,
    example: "report Some command does'nt work"
}

exports.conf = {
    aliases: [],
    cooldown: 3
  }
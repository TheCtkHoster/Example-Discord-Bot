const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let arg = message.content.split(" ").slice(1);
    const arg1 = arg.join(" ");
    if(!arg1) return message.channel.send(`Pls Type a Suggestion For This Bot..\n\`Example: ${config.prefix}suggestion Add a Command Pls\``);

    user = config.owner;

    const embed = new Discord.MessageEmbed()
    .setTitle(`New Suggestion`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addField(`Suggestion:`, arg1)
    .setDescription(`Sender: <@${message.author.id}>\n\`Name: ${message.author.tag}\nUser ID: ${message.author.id}\nServer: ${message.guild.name}\nServer ID: ${message.guild.id}\``)

    message.channel.send('Successfuly send your suggestion!').then(msg = bot.channels.cache.find(x => x.id === "761765333164883999").send(embed));
}

exports.help = {
    name: 'suggestion',
    Description: `Type a suggestion (don't Spamming)`,
    usage: `${config.prefix}suggestion`,
    example: "suggestion Add some command!"
}

exports.conf = {
    aliases: [],
    cooldown: 3
  }
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Information Centre")
    .setColor("RANDOM")
    .setDescription("This is a quite easy to use which contains: **Moderate** | **Information** | **Fun** & more systems.")
    .setTimestamp()
    .addField(`**Creator**`, `Greblue#6328`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())

    message.channel.send(embed);
}

exports.help = {
  name: "info",
  description: "Information of the bot",
  usage: "info",
  example: "info"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}

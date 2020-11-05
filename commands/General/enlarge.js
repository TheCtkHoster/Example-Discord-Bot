const Discord = require("discord.js");
const { parse } = require("twemoji-parser");

exports.run = async (client, message, args) => {
    const emoji = args[0];
    if (!emoji) return message.channel.send("No emoji provided!");

    let custom = Discord.Util.parseEmoji(emoji);
    const embed = new Discord.MessageEmbed()
    .setTitle(`Enlarge version of ${emoji}`)
    .setColor("RANDOM")

    if (custom.id) {
        embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
        return message.channel.send(embed);
    }
    else {
        let parsed = parse(emoji, { assetType: "png" });
        if (!parsed[0]) return message.channel.send("Invalid emoji!");

        embed.setImage(parsed[0].url);
        return message.channel.send(embed);
    }
}

exports.help = {
    name: "enlarge",
    description: "Large the emojis and scam it",
    usage: "enlarge <emoji>",
    example: "enlarge 🤨"
  }
  
  exports.conf = {
    aliases: [],
    cooldown: 5
  }
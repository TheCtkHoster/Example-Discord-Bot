const Discord = require("discord.js");
const config = require("./config.json")
const example = require("./handler/ClientBuilder.js");
const client = new blobcord();
const alexa = require('alexa-bot-api');
let ai = new alexa("aw2plm");

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.package = require("./package.json");
client.on("warn", console.warn);
client.on("error", console.error);

client.on('message', async message => {
    if (message.author.bot) return;

    if(message.content.startsWith(`<@${client.user.id}>`)){
        return message.channel.sendI(`Hey ${message.author}, my prefix is ${config.prefix}`)
    }
});
client.login(config.token).catch(console.error);

const Discord = require('discord.js');
const { TOKEN } = require("../util/utils");
const bot = new Discord.Client();

bot.login(TOKEN);

module.exports = bot;
const { readdirSync } = require("fs");
const { join } = require("path");
const { Collection } = require("discord.js");
const keepAlive = require("./server");
keepAlive();
const bot = require("./src/helpers/bot");


const queue = new Map();
let command, event;
bot.commands = new Collection();
bot.events = new Collection();

/** Reading the commands dir to get the commands**/
const commandFiles = readdirSync(join(__dirname, "src/commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  command = require(join(__dirname, "src/commands", `${file}`));
  bot.commands.set(command.name, command);
}

/** Reading the events dir to get the events**/
const eventFiles = readdirSync(join(__dirname, "src/events")).filter(file => file.endsWith(".js"));
for(const file of eventFiles) {
  event = require(join(__dirname, "src/events", `${file}`));
  bot.events.set(event.name, event);
}

/* Events */
bot.on('message', (message) => bot.events.get("message").messageEvent(message, bot.commands, queue));
bot.on('ready', () => bot.events.get("ready").readyEvent());


process.on('unhandledRejection', err => console.log(err));
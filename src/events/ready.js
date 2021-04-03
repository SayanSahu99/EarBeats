const bot = require("../helpers/bot");

async function readyEvent() {
    bot.user.setActivity(`@${bot.user.username}`, { type: 'LISTENING' });
}

module.exports = {
    name: "ready",
    readyEvent: readyEvent
}
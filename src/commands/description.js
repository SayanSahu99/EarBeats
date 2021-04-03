const embed = require("../helpers/embed");

function getDescription(message, serverQueue) {
    if (!serverQueue)
        return message.channel.send("There is no song!");

    let limit;
    let length = serverQueue.songs[0].description.length;

    length < 2048 ? limit = length : limit = 2048;

    return embed(serverQueue.textChannel, { title: "Details", description: serverQueue.songs[0].description.slice(0, limit) });
}

module.exports = {
    name: "description",
    description: getDescription
}
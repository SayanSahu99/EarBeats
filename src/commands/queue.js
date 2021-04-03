const embed = require("../helpers/embed");

function getQueue(message, serverQueue) {
    if (!serverQueue)
        return message.channel.send("There is no song!");

    let title = "**Queue**";
    let description = '\n**Now Playing - **\n\n';
    for (let index = 0; index < serverQueue.songs.length; index++) {
        if (index === 0) {
            description += `**${index + 1}) ${serverQueue.songs[index].title}**\n\n**Next - **\n\n`;
            continue;
        }
        description += `${index + 1}) ${serverQueue.songs[index].title}\n`;
    }
    return embed(serverQueue.textChannel, { title: title, description: description });
}

module.exports = {
    name: "queue",
    queue: getQueue
}
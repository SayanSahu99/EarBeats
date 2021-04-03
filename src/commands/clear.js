function clear(message, serverQueue) {

    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel"
        );

    if (!serverQueue)
        return message.channel.send("There is no song in the queue!");

    if (serverQueue.songs[0]) {
        serverQueue.songs = [serverQueue.songs[0]];
    }

    else {
        serverQueue.songs = [];
    }

    return message.channel.send("Queue has been cleared!");
}

module.exports = {
    name: "clear",
    clear: clear
}
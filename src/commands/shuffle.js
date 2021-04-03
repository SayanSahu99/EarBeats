function shuffle(message, serverQueue) {

    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel"
        );

    if (!serverQueue)
        return message.channel.send("There is no song in the queue!");

    if (serverQueue.songs[1]) {
        for (let i = serverQueue.songs.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = serverQueue.songs[i];
            serverQueue.songs[i] = serverQueue.songs[j];
            serverQueue.songs[j] = temp;
        }
    }

    return message.channel.send("Queue has been shuffled!");
}

module.exports = {
    name: "shuffle",
    shuffle: shuffle
}
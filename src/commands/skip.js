function skip(message, serverQueue) {
    console.log(serverQueue);
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel"
        );
    if (!serverQueue)
        return message.channel.send("Queue is empty");
    serverQueue.connection.dispatcher.end();
}

module.exports = {
    name: "skip",
    skip: skip
}
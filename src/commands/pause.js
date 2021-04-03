function pause(message, serverQueue) {
    console.log(serverQueue);
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to stop the music!"
        );

    message.member.voice.channel.mute

    if (!serverQueue)
        return message.channel.send("There is no song that I could pause!");
    serverQueue.connection.dispatcher.pause();

}

module.exports = {
    name: "pause",
    pause: pause
}
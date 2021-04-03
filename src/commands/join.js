async function join(message, serverQueue) {
    console.log(serverQueue);
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel"
        );

    try {
        var connection = await message.member.voice.channel.join();
        connection.voice.setSelfDeaf(true);
        serverQueue.connection = connection;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    name: "join",
    join: join
}
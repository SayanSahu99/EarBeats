const { PREFIX } = require("../util/utils");

async function messageEvent(message, command, queue) {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (!message.content.startsWith(PREFIX)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${PREFIX}join`)) {
    command.get("join").join(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${PREFIX}play`)) {
    command.get("play").play(message, serverQueue, queue);
  }

  else if (message.content.startsWith(`${PREFIX}stop`)) {
    command.get("stop").stop(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${PREFIX}skip`)) {
    command.get("skip").skip(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${PREFIX}clear`)) {
    command.get("clear").clear(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${PREFIX}pause`)) {
    command.get("pause").pause(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${PREFIX}resume`)) {
    command.get("resume").resume(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${PREFIX}description`)) {
    command.get("description").description(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${PREFIX}queue`)) {
    command.get("queue").queue(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${PREFIX}shuffle`)) {
    command.get("shuffle").shuffle(message, serverQueue);
    return;
  }

  else {
    message.channel.send("You need to enter a valid command!");
  }

}

module.exports = {
  name: "message",
  messageEvent: messageEvent
}
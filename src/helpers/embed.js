const Discord = require('discord.js');

function embed(channel, content) {
    const embed = new Discord.MessageEmbed()
      // Set the title of the field
      .setTitle(content.title)
      // Set the color of the embed
      .setColor(0xffff00)
      // Set the main content of the embed
      .setDescription(`[${content.description}](${content.url})`)
    // Send the embed to the same channel as the message
    channel.send(embed);
}

module.exports = embed;
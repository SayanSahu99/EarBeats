const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const YouTube = require("discord-youtube-api");
const { YOUTUBE_API_KEY } = require("../util/utils");
const youtube = new YouTube(YOUTUBE_API_KEY);
const bot = require("../helpers/bot");

async function execute(message, serverQueue, queue) {
    const args = message.content.split(" ");
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "I need the permissions to join and speak in your voice channel!"
      );
    }

    const video = await youtube.searchVideos(args);
  
    console.log(video);
  
    const songInfo = await ytdl.getInfo(video.id);
  
    const song = {
      title: songInfo.videoDetails.title,
      url: songInfo.videoDetails.video_url,
      description: video.description
    };
  
  
    if (!serverQueue) {
      // Creating the contract for our queue
      queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: false,
      };
      // Setting the queue using our contract
      queue.set(message.guild.id, queueContruct);
      // Pushing the song to our songs array
      queueContruct.songs.push(song);
  
      try {
        // Here we try to join the voicechat and save our connection into our object.
        const connection = await voiceChannel.join();
        connection.voice.setSelfDeaf(true);
        queueContruct.connection = connection;
        // Calling the play function to start a song
        serverQueue = queueContruct;
        play(message.guild, queueContruct.songs[0], queue);
  
      } catch (err) {
        // Printing the error message if the bot fails to join the voicechat
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
  
    } else {
  
      if (voiceChannel) {
        // Check if any of the ALREADY EXISTING connections are in that channel, if not connect
        if (!bot.voice.connections.some(conn => conn.channel.id == voiceChannel.id)) {
          const connection = await voiceChannel.join();
          queueContruct.connection = connection;
          play(message.guild, queueContruct.songs[0]);
          serverQueue.songs.push(song);
          return embed(message.channel, { title: "Queued", description: `**${song.title}**`, url: song.url  });
        }
        // else: you're already in the channel
        else {
          serverQueue.songs.push(song);
          return embed(message.channel, { title: "Queued", description: `**${song.title}**`, url: song.url  });
        }
      }
    }
  }

  function play(guild, song, queue) {
    const serverQueue = queue.get(guild.id);
    const dispatcher = serverQueue.connection;
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
    const res = dispatcher
      .play(ytdl(song.url))
      .on("end", () => {
        console.log("ENDED");
      })
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0], queue);
      })
      .on("error", error => console.error(error));
    res.setVolumeLogarithmic(serverQueue.volume / 5);
    
    embed(serverQueue.textChannel, { title: "Now Playing", description: `**${song.title}**`, url: song.url })
  }

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
  

  module.exports = {
    name: 'play', 
    play: execute
  }
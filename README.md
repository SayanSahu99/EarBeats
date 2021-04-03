

<p align="center">
  <img src="https://cdn.discordapp.com/app-icons/821826056973582396/34c47a9e920ec9b0f03886ae07c65293.png"/>
</p>

<div align=center>
  <h2>EarBeats</h2>
  <br/>

  <a href="https://github.com/discordjs">
    <img src="https://img.shields.io/badge/discord.js-v12.5.1-blue.svg?logo=npm" alt="shield.png">
  </a>

  <a href="https://github.com/SayanSahu99/EarBeats/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="shield.png">
  </a>
</div>


 # About

> EarBeats is an open source Discord Music Bot built with discord.js. It currently supports YouTube.
## Requirements

1. Discord Bot Token **[HELP](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API **[HELP](https://developers.google.com/youtube/v3/getting-started)**  
3. Node.js v12.18.1 or newer

## Installation

You can add EarBeats to your server with [this](https://discord.com/oauth2/authorize?client_id=821826056973582396&scope=bot&permissions=3152896) link. Or, you can clone this repo and host the bot yourself.
```
git clone https://github.com/SayanSahu99/EarBeats
```
After cloning, run
```
npm install
```
to install all of the dependencies. You need [node](https://nodejs.org/en/) to be installed. 

## Set Up

You have to create a `.env` file in order to run the bot. The file should look something like this:
```
DISCORD_BOT_TOKEN=Your_Discord_Token
YOUTUBE_API_KEY=Your_Youtube_API_Key
PREFIX=~
```
## Commands

> The default prefix is '~'

* Play music from YouTube using url

`~play https://www.youtube.com/watch?v=qpgTC9MDx1o`

* Play music from YouTube using search query

`~play English Songs`


`Commands`
* Play / Add song to queue (~play [SEARCH])
* Stop (~stop)
* Skip (~skip)
* Pause (~pause)
* Resume (~resume)
* Join voice channel (~join)
* Description (~description)
* Queue (~queue)
* Clear queue (~clear)
* Shuffle (~shuffle)


## To Do
* Looping
* Song remove and move from the queue

## License
Released under the [MIT](https://opensource.org/licenses/mit-license.php) license.
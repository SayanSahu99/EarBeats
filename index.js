const { readdirSync } = require("fs");
const { join } = require("path");
const bot = require("./src/bot");
const { PREFIX } = require("./src/util/utils");


/** Reading the commands dir to get the commands**/
const commandFiles = readdirSync(join(__dirname, "src/commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  command = require(join(__dirname, "src/commands", `${file}`));
}

process.on('unhandledRejection', err => console.log(err));
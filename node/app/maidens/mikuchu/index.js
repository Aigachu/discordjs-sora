let MikuchuDiscordClass = require('./src/Mikuchudiscord/MikuchuDiscord');
let MikuchuDiscordClient = new MikuchuDiscordClass(require('./settings'));

/**
* === Exports ===
* When this folder is required, this is what's sent to the variable.
*/
module.exports = {
  MikuchuDiscord: MikuchuDiscordClient,
};
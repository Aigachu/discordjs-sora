class Remind extends Command {

	constructor(client) {

		super(client);

    // Uncomment to enter different aliases that can be used to use the command.
    // e.g. the ping command can have pi or pg as aliases.
		// this.aliases = [ "alias1", "alias2"];
    
    // Uncomment to customize the text that will be shown when --help is used.
    // this.helpText = "";
    
    // Uncomment to customize the text that will be shown when --desc is used.
    // this.descText = "";
    
    // Uncomment to declare that input is required for this command.
    // Follow the template here to assure functionality of the Synopsis.
    // this.input = {
    //   input_name: {
    //     type: "plain", // Either text or plain.
    //     name: "An example of plain input.",
    //     description: "Example of plain input needed for the command to function."
    //   }
    // };

    // Uncomment to permit different options in the command
    // Follow the template here to assure functionality of the Synopsis.
    // this.options = {
    //   d: {
    //     "readable_name" : "Direct Message",
    //     "description"   : "Send the ping via direct message instead of sending it in the chat.",
    //   },
    //   c: {
    //     readable_name : "Custom Message",
    //     description   : "Send a message defined on the fly instead of the default ping response.",
    //     needs_text   : true,
    //   }
    // };

    // Uncomment to configure the command.
    // You can adjust which channels the command can be used in, as well as who can use the command.
    // this.config = {
    //   auth: {
    //     guilds: [],
    //     channels: [],
    //     pms: false,
    //     users: [],
    //     oplevel: 0,
    //   },
    // };
    
    // Uncomment to adjust the cooldown of the command.
    // The default cooldown is 5 seconds.
    this.cooldown = 0;

  }

  /**
   * Tasks the command will execute.
   * Options are handled by the developer of the command accordingly.
   * @param  {[type]} data Data that was obtained from the message, such as input and other things.
   * (Object) data {
   *   options => Contains all of the options organized in an object by key, similar to above.
   *   array => Contains the input seperated into an array. (Shoutouts to old params style)
   *   full => Contains the full input in a text string.
   * }
   */
  tasks(data) {

    var input = data.input.full;

    var destination = input.split(' ')[0];

    input = input.replace(destination + ' ', '');

    var subject_regex = /.+?(?= at [0-9]+| in [0-9]+| on (?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May?|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)| on the [0-9].)/;
    var subject = input.match(subject_regex)[0];

    input = input.replace(subject + ' ', '');

    console.log(input);

    var get_countdown_regex = /(?:in [0-9]+(?:(?:m|s|h(?:r)?|d|w(?:k)?|y(?:r)?)(?:s)?| (?:sec(?:ond)?|min(?:ute)?|hr|hour|d(?:ay)?|wk|week|mth|month|yr|year)(?:s)?))/;
    var countdown = input.match(get_countdown_regex)[0].replace('in ', '');

    input = input.replace(countdown, '').trim();

    var get_time_regex = /\b(at )?\b((0?[1-9]|1[012])([:.][0-5][0-9])?([:.][0-5][0-9])?(\s?[apAP][mM])|([01]?[0-9]|2[0-3])([:.][0-5][0-9]))\b/;
    var time = input.match(get_time_regex)[0].replace('at ', '');

    input = input.replace(time, '').trim();

    // If the string has 'in' AND 'on' OR 'at', we should fire en error.
    // If a date is specified, but no time, set a default time OR fire an error.
    // If a countdown is specified, we shouldn't have a date OR a time!

    data.msg.channel.send(`Input: ${data.input.full}`);
    data.msg.channel.send(`Destination: ${destination}`);
    data.msg.channel.send(`Subject: ${subject}`);

    var currentTimestamp = moment().startOf('second').format('x');
    var currentTime = moment().startOf('second').format('MMMM Do YYYY, h:mm:ss a');



    console.log();

    return;

  }

}

module.exports = Remind;
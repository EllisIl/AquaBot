/* -------------------------------------------------------------------------- */
/*                                  variables                                 */
/* -------------------------------------------------------------------------- */
const Discord = require('discord.js'); // itnitializes Discord.js
const { GatewayIntentBits } = require('discord.js'); // initializes GatewayIntentBits
const config = require("./config.json") // gets the bot token from config.json
const variables = require("./variables.json") // gets assorted variables from variables.json

const client = new Discord.Client({ intents: [ // list of intents
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.MessageContent
] });

client.commands = new Discord.Collection(); // creates handler for commands
client.events = new Discord.Collection(); // creates handler for events

/* -------------------------------------------------------------------------- */
/*                               command handler                              */
/* -------------------------------------------------------------------------- */
["command_handler", "event_handler"].forEach((handler) => { // creates a require statement for every command and event
  require(`./handlers/${handler}`)(client, Discord);
});

/* -------------------------------------------------------------------------- */
/*                               message events                               */
/* -------------------------------------------------------------------------- */
client.on('messageCreate', (message) => { // when a message is created
    if (message.mentions.has(variables.aquaTag)) { // checks if the message mentions Aqua
        if (message.author.id === variables.exyTag) { // if Exy mentions Aqua
            message.channel.send("Faszevősanyi"); // swears
        } else {
            message.channel.send(variables.cirbo); // if the mention is not from Exy it sends the cirbo emoji
        }
    }

    if (message.author.bot) return;// check to prevent the bot from looping
    switch (message.content.toLowerCase()) { // if the message matches the content of the case it will send the message/attachment and break from the chain
      case "fizzy": message.channel.send({ files: ["./Response Videos/steven.mp4"] }); break;
      case "hi evan": message.channel.send({ files: ["./Response Videos/evan.png"] }); break;
      case "evan": message.channel.send(variables.evan); break;
      case "palcsi stream": message.channel.send(variables.palcsiStream); break;
      case "gollwer": message.channel.send({ files: ["./Response Videos/gollwer.mp4"] }); break;
      case "palcsi": message.channel.send({ files: ["./Response Videos/palcsi.mp4"] }); break;
      case "majac": message.channel.send({ files: ["./Response Videos/majac.mp4"] }); break;
      case "bubagee": message.channel.send({ files: ["./Response Videos/bubagee1.png"] }); message.channel.send({ files: ["./Response Videos/bubagee2.png"] }); break;
      case "go play mendes": message.channel.send({ files: ["./Response Videos/mendes.png"] }); break;
      case "goodnight": message.channel.send({ files: ["./Response Videos/sleep_well.mp4"] }); break;
      case "good night": message.channel.send({ files: ["./Response Videos/sleep_well.mp4"] }); break;
      case variables.saber: message.react(variables.saberBurgerEmote); break;
      case "burger": message.channel.send(variables.saber); break;
      case "saber": message.channel.send(varables.saber); break;
      case "fat boobs": message.channel.send(variables.fatBoobs); break;
      case "hi": if(message.author.id === variables.palcsiTag){message.channel.send("Hi cutie! :heart:")} else { message.channel.send(variables.floppaWave);} break;
      case "rubz": message.channel.send(variables.rubz); break;
      case "gn fella": message.channel.send({ files:["./Response Videos/good_night.mp4"]}); break;
      case variables.zamn: message.react(variables.zamn); break;
      case "exy": message.channel.send(`<@${variables.exyTag}> Faszevősanyi.`); break;
  }
});

/* -------------------------------------------------------------------------- */
/*                                  login bot                                 */
/* -------------------------------------------------------------------------- */

client.login(config.token); // logs the bot into discord and brings it online

setInterval(function(){
  client.login(config.token);
}, 1827600) // logs in every few minutes to make sure the bot stays online (this is bad as it can have Discord reset the token)

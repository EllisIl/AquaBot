/*
    Tracks when messages are sent and checks for commands.
*/

const fs = require('fs');

module.exports = (Discord, client, message) =>{

    const prefix = '!';
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(message.content.startsWith(prefix)){
        try {
            command.execute(message, args, cmd, client, Discord);
        } catch (err) {
            console.log(err);
        }
    }
}

/*
    Creates an embed with the source image of the user's profile picture
*/

const { EmbedBuilder } = require('discord.js')
module.exports = {

    name: "pfp",
    description: "Gets the profile picture of the user",
    
    execute(message, args, cmd, client, Discord) {

        const user = message.mentions.users.first() || message.author;

        var randomColor = Math.floor(Math.random()*16777215).toString(16);

        const avatarEmbed = new EmbedBuilder()
            .setColor(randomColor)
            .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`)
            .setDescription(`${user}'s profile picture`);

        message.channel.send({embeds : [avatarEmbed]});
    },
  };
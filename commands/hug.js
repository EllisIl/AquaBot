/*
    Creates an embed mentioning both users with a random gif in the embed
*/

const { EmbedBuilder } = require('discord.js');
let hug = ['https://c.tenor.com/PB4cSiX4nE0AAAAC/cute-cat.gif', 
'https://c.tenor.com/ZzorehuOxt8AAAAC/hug-cats.gif', 
'https://c.tenor.com/jU9c9w82GKAAAAAC/love.gif', 
'https://c.tenor.com/OXCV_qL-V60AAAAC/mochi-peachcat-mochi.gif']

module.exports = {
    name: "hug",
    description: "Hugs a specific user",
    execute(message, args, cmd, client, Discord) {

        var randomHug = hug[Math.floor(Math.random() * hug.length)]

        var randomColor = Math.floor(Math.random()*16777215).toString(16);

        if (message.mentions.members.first()){

            userMentioned = message.mentions.users.first()

            user = message.member

            const embed = new EmbedBuilder()
                .setColor(randomColor)
                .setDescription(`${user} hugs ${userMentioned}! :heart: :heart: :heart:`)
                .setImage(randomHug)

            message.channel.send({embeds: [embed]});

        } else {
            message.channel.send('You must include a user to hug! (Share the love) :heart:')
        }
    },
  };

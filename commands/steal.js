/*
    Gets the source images for emojis.
*/

module.exports = {
    name: "steal",
    description: "Gets the source image of emojis",
    execute(message, args, cmd, client, Discord) {
        if(args[0]){
            emoji = args[0]
            if(!emoji.startsWith('<')) message.channel.send("Emoji not found");
            let isAnimated = emoji.startsWith('<a:');
            let name = emoji.split(':')[1];
            let id = emoji.split(':')[2].replace('>', '');
            let url = `https://cdn.discordapp.com/emojis/${id}${isAnimated ? '.gif' : '.png'}`;
            
            var randomColor = Math.floor(Math.random()*16777215).toString(16);

            const emojiEmbed = new Discord.EmbedBuilder()
            .setColor(randomColor)
            .setImage(url)
            .setTitle(`Source image for :${name}:`);

            message.channel.send({embeds : [emojiEmbed]});

        } else {
            message.channel.send("Emoji not found");
        }
    },
  };
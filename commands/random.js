/* 
    I used https://medium.com/@alexkrameris/markov-chain-implementation-in-javascript-a698f371d66f to create this.
    Generates a random string of words using a markov chain.
*/
const fs = require('fs');

module.exports = {

    name: "random",
    description: "random text",
    
    execute(message, args, cmd, client, Discord) {
        text = fs.readFileSync('text.txt', {encoding: 'utf8', flag: 'r'}); // reads the file into a variable
        length = (Math.random() * (1 - 0.01) + 0.01); // gets a random number to determine the length of the message

        function markovMe(content) { // creates a markov chain
            const markovChain = {} // empty markov chain
            const textArr = content.split(' ') // turn the text into an array of strings
            for (let i = 0; i < textArr.length; i++) { // for each of the strings in the array
              let word = textArr[i].toLowerCase().replace(/[\W_]/, "") // removes punctuation and capitalization
              if (!markovChain[word]) { // if there is no word in the array spot
                markovChain[word] = [] // add an empty value
                }
              if (textArr[i + 1]) { // if there is a word in the next array spot
                markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/, "")); // add it to the current word
          }}
            const words = Object.keys(markovChain)
            let word = words[Math.floor(Math.random() * words.length)] //
            let result = ''
            for (let i = 0; i < words.length; i++) {
              result += word + ' ';
              newWord =  markovChain[word][Math.floor(Math.random() * markovChain[word].length)]
              word = newWord;
              if (!word || !markovChain.hasOwnProperty(word)) word = words[Math.floor(Math.random() * words.length * length)]
            }
            return result;
          }
        if (message.content) message.channel.send(markovMe(text));
    },
  };



const cowsay = require("cowsay");
const info = require('./information.js');
console.log(cowsay.say({
    
    text: `Hi! I'm ${info.myName} and i study at ${info.campus}!`,

}));
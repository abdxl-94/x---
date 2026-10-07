const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/abdxl-94/x---/blob/main/images/IMG-20261003-WA5895.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello 👋 XENO - MINI is alive now! 😍 🚀*",
BOT_OWNER: '94743006964',  // Replace with the owner's phone number



};

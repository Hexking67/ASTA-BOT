const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "⚔️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*ASTA BOT *

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: MANJ
*| ɴᴜᴍʙᴇʀ*: 254797303045
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v

special thanks to malvin king
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/vPGJ3zG/e8ce03a4fd1b920d.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

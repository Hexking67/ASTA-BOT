const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "⚔️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `* *_ ASTA BOT REPO_* 


* Repo:* https://github.com/Hexking67/ASTA-BOT/

OWNER https://wa.me/254797303045?text=Hi%20MANU


_Thank you for choosing ASTA BOT

*Join My WhatsApp Channel✓ - :* https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v


> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : © MANU*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/whar66.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

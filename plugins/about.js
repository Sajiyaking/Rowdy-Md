const config = require('../config')
const {cmd , commands} = require('../command')



cmd({
    pattern: "about",
    desc: "To get the bot informations.",
    react: "❤",
    category: "main",
    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{


let about = ` 
👋 𝐇𝐄𝐋𝐋𝐎𝐖 𝐓𝐇𝐄𝐈𝐑 ${94769615736}
𝐈 𝐀𝐌 𝐇𝐘𝐏𝐄𝐑-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐌𝐫 𝐝𝐚𝐤𝐬𝐡𝐢𝐧𝐚 (𝐑𝐨𝐰𝐝𝐲)..
           
ɢɪᴛʜᴜʙ :    
             
ʏᴏᴜᴛᴜʙᴇ : 
      
ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ : 

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ᴅᴀᴋꜱʜɪɴᴀ `

return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/tpJGQkr/20241122-203120.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})

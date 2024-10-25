const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_54_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibHo3WmtmWDhObmpsN1hQd0xJZ1h6UmpUQXI5RVZrMmE5MnVCMFNyTXBlYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyMjgyOTM3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzZCMzU1REM3QkJGNUVFNzFGRUUxMUY0OUZBMkYxNDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NjA1MjUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl90TGJZWHNJUU1LWm9ZOWRXOC1XZ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODk4ZmY1MDUtY2FlMS00YzlhLTllZDUtNDkxZTg2YjkwYmYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgMTc2LFxuICAgICAgNzYsXG4gICAgICAxNzQsXG4gICAgICAyMDYsXG4gICAgICAyNDYsXG4gICAgICAxNDgsXG4gICAgICAxMzksXG4gICAgICAxNDgsXG4gICAgICA3NSxcbiAgICAgIDEzMCxcbiAgICAgIDE1NCxcbiAgICAgIDg3LFxuICAgICAgMjQsXG4gICAgICAyNDUsXG4gICAgICAyMDgsXG4gICAgICAyMTEsXG4gICAgICA0OSxcbiAgICAgIDQ2LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICA3MyxcbiAgICAgIDE2MyxcbiAgICAgIDI0OCxcbiAgICAgIDk1LFxuICAgICAgNTQsXG4gICAgICAxMTMsXG4gICAgICA0NCxcbiAgICAgIDEwNixcbiAgICAgIDk0LFxuICAgICAgMTIwLFxuICAgICAgMTc4LFxuICAgICAgMjUsXG4gICAgICAyNTEsXG4gICAgICAzLFxuICAgICAgNzQsXG4gICAgICAxMTcsXG4gICAgICAxNTAsXG4gICAgICAyMDMsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFhQUUY0NDFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzIyODI5Mzc3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJRZWV1blwiLFxuICAgIFwibGlkXCI6IFwiMTAwOTc5NTQ3MDE0NjU6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKT2g3c2NCRVB6YzNyZ0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjIyQVZQR0hZeWx6NXMrOFRwcHd0b0FFSThjYTlnTU1QTWxMQ3J3RUhabHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVDNzbmtsTDFoemVhTzRIejN3YkpGQ1dpWFU0UE93TTJHcmxrYllScmVmamt4R2ZkZmdLQ2Vid2Jwa0lWS3VNYytvSnBMSFRJMEtTRHVGNzdLV2tmQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQVptVGlZZ2Q0ZTZhRzlMek5VQzlxYkYxWHBjcVhza2dOejMreWNWZGw4TGhyN3VOSmFyb21HTDRkcnpFeFNjcFFYY2w4a2dJK1pxRHcwRmRDTEY1aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjI4MjkzNzc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NjA1MjQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEZ2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMRnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2ZjFPK1A3YXU4WEo3ZHphS3c4TFhncDBHWlJ0czJ5QkE0SUVDb1phNmxRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxOTEzOTczMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

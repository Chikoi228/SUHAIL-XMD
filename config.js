=
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_47_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3LFxuICAgICAgICA4LFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM2LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVNTGFrSWtaUnpBY3hIY0U2WjdPTGdSRzdhYWFkT1FmMlpSRmpBeTlXZ1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAyNjE3NDMxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjNGQ0M2MDcwOTE1RjEzMTI3NjhENzk4QzU0MTZCMUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMzg0MDIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAyNjE3NDMxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkVDOEFEOUNBQkUxNkUwMjJEMEYwNjI0N0Y2MzQxN0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMzg0MDIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktCNWFsWWhfUnhxN1dYY1VhN0hVR1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODk5ZmU3OWItNjliZS00Y2E2LTgyZTYtZWY5YzA0NDcxZTJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDM4LFxuICAgICAgNjQsXG4gICAgICA5MCxcbiAgICAgIDUxLFxuICAgICAgMTk5LFxuICAgICAgMjAwLFxuICAgICAgNzEsXG4gICAgICAyMzIsXG4gICAgICA1NixcbiAgICAgIDM1LFxuICAgICAgMTMzLFxuICAgICAgMTgwLFxuICAgICAgMTUxLFxuICAgICAgMTEzLFxuICAgICAgMjA3LFxuICAgICAgMTY3LFxuICAgICAgODEsXG4gICAgICAxNDMsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTM3LFxuICAgICAgMjA2LFxuICAgICAgMjE0LFxuICAgICAgMTIyLFxuICAgICAgMTEyLFxuICAgICAgNDQsXG4gICAgICA4MyxcbiAgICAgIDM4LFxuICAgICAgMjQ3LFxuICAgICAgNTMsXG4gICAgICAyMDIsXG4gICAgICA1NSxcbiAgICAgIDIxNixcbiAgICAgIDIwLFxuICAgICAgMTMsXG4gICAgICAyNDksXG4gICAgICAxNixcbiAgICAgIDI4LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR041TTEyNldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjYxNzQzMTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU4MzgxNDc0NDUxNTAzOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQ2hlYXBlclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpVTFjc0VFSStxaUxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQTI0VVNSSkl4dWZVTjMvY0h5RVdRR1UzbVlGMXloLy9POGZCRFEwOEVoND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwRnJQN0NVV1pnbmw3VGJMNWF4bWxIdkZhUjIwUnlrMlpkOU90eVg5K0pUQkpacTAwN1o2MHBBRHU2THpjSTUxa3BCZHIra3dKMFpzN0ZzZnZ1emhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJS2VzRGZ1M3hwTUtxQTlkKzNPb1dzSXk0UUxxYVIxbGRDazBpTUk1OHJuc2VYNWFhMy9LQkYxR1l2N0pZSEZjZDhpYWR2aHBHUVMxbU81SVozQUpqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2MTc0MzEyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM4NDAxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF5RlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXlGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDFvcVVURWdQd1BQaE44Y0VPNW13VVhiK0M4cmZDYWNqa3Y1U3Y2VGc5az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjMyNDIzNTQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIzODQwMjA3MjZcIn0iCn0"  // PUT your SESSION_ID 


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

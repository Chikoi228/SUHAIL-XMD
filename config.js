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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_27_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NixcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDMwLFxuICAgICAgICA5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NixcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvUG1TWnN1WG5nNVNQZFpRVWVPQmRURm9Fa3FiOGZWNEdNN0kwVmNBT2cwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSOFl1NlhEOVMtdTlZczBnalV2SHV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmMGM5NmJiLTI5YzMtNGMyZS04YTQ5LTI0MDg1OGNkZjNhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxMzMsXG4gICAgICAzNSxcbiAgICAgIDUyLFxuICAgICAgMjQ3LFxuICAgICAgNDIsXG4gICAgICAxNDIsXG4gICAgICAyMjgsXG4gICAgICA5MyxcbiAgICAgIDE5OCxcbiAgICAgIDEzNyxcbiAgICAgIDI0OCxcbiAgICAgIDIzMixcbiAgICAgIDE1NCxcbiAgICAgIDIzOCxcbiAgICAgIDEyMixcbiAgICAgIDI0NyxcbiAgICAgIDIyMixcbiAgICAgIDE3MixcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDI1LFxuICAgICAgMTk1LFxuICAgICAgMjI0LFxuICAgICAgMTk5LFxuICAgICAgMjE1LFxuICAgICAgMjI3LFxuICAgICAgMjM1LFxuICAgICAgMTM1LFxuICAgICAgNTEsXG4gICAgICAyMTEsXG4gICAgICAyMDcsXG4gICAgICAxMTQsXG4gICAgICAxMDcsXG4gICAgICAyMTgsXG4gICAgICA4OSxcbiAgICAgIDE3NCxcbiAgICAgIDEwNyxcbiAgICAgIDg2LFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1cxQ01WTE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjY1MDY4OTk6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBY3RpdmUgQWRtaW5cIixcbiAgICBcImxpZFwiOiBcIjE0MzQ4MjU0MjkxNTYwNDo1OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVDdrK3dCRUs2bTFMZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZDTFlJQUgxK2s1aytUMUE2ZWFFQ2dSNWhLUDVCeHVUdEo2NGhVUnRvVzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRUpyOGJVc3M3djU5bmcxb0FqazVMa3ZnaDJUUlVHTnpmZjIxSkFJdHlIR3ZiR0FKc2ZUY0RDOVU5T0VaZGpkaDcyb2hHQVBlSnJqUTJ6S3FJVXhQQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU1ZQNzNmZ1NWZXFtVzlSVVh2YTVSaXRBWGJaYURVelBMeW1rUTlHTWdmQlhzQktNVnV0UmFPYXZtV3ZWaWNndkNWNksvTEp4czI5TUpOYWRMV2NxQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NjUwNjg5OTo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTQzNDQxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI3dVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjd1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiR0RVSXRPV25JZ21IakppdTdkeks1T01PYnk0V00wQUJuc0g1aVMzTkVmWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0OTUyNTQ5OTUsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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

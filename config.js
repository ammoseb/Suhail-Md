const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349049959702";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_47_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRjcyaFNpQjhTOHBnYU9QYkp3bnd2ZGk5dHNOODZpbmZKN1ZFakpxTFE3ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEtSeElWdWxRV215VVByN3FEWVZsZ1wiLFxuICBcInBob25lSWRcIjogXCJmN2I3OWMwZS03YTExLTQyNDktOGM2Yi01MDE5ZDY0ZDQ2YzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAxNjUsXG4gICAgICAxMzcsXG4gICAgICAyMzksXG4gICAgICAxMDEsXG4gICAgICA0LFxuICAgICAgNjUsXG4gICAgICAxMTUsXG4gICAgICA3OSxcbiAgICAgIDIxOCxcbiAgICAgIDIyMyxcbiAgICAgIDIxMyxcbiAgICAgIDExOCxcbiAgICAgIDk5LFxuICAgICAgOSxcbiAgICAgIDMsXG4gICAgICAxNTcsXG4gICAgICA3NyxcbiAgICAgIDIxMSxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTgyLFxuICAgICAgMTcxLFxuICAgICAgMTA1LFxuICAgICAgMTg0LFxuICAgICAgMTgzLFxuICAgICAgMjYsXG4gICAgICAxOCxcbiAgICAgIDE5MixcbiAgICAgIDU0LFxuICAgICAgODUsXG4gICAgICAyMTAsXG4gICAgICAyMTEsXG4gICAgICAxMDUsXG4gICAgICAxMzMsXG4gICAgICAxNDYsXG4gICAgICAyMjUsXG4gICAgICAzNyxcbiAgICAgIDI1LFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZXVlFFMVpMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ5OTU5NzAyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NTI0NTM3MTMxODQ4NTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xxZ2lxOEZFTi9KZ0xVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMWQ5YWQweVNTa0NRcFdsSUUzdXBHdFBuRHJ5MHRpKy9ubXhmakd5WVVCND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlbFc5cFMrL092QzJhZmsycHI0dWorQVVCOVNWeGM2OXdVbWVRMmdUTHRKTGtrK05yS2tZTm9mT0s4emk1QVg3SmZHVWR0dVVzSkNrcXc1N0EwbmxDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0cnFrbWpBYVoxWldzb0dyL1hEcXlWRXp5cVhML1FxMjkrMnYwMzR2SE54SnQyMHVTWHBBdE1HSXVBaTdycDY0SS9BSlIyQU8veEFIcG5ocitjQlJBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ5OTU5NzAyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NzEyMzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJcWZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlxZi5qc29uIjogIntcImtleURhdGFcIjpcImhwS3h2K2ZjNjhuMHd3cmJIUGZUSGFjakhBUlRlVXc3akcvRldITFZaaGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0MDkxMTQxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwOTQxNDkwNzkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

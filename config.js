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


global.devs = "255628966182" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255628966182";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255628966182";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_37_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk4xSzdCZW01c09CM2htMitXaEtlRSsvbk55VXlSN1N0TGdvZ0duQUwzd0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjI4OTY2MTgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMDMyRkQ0NTY4N0I0NTA5QTM3RjM0MkFBMDI2MjBCRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwODU4NDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnA1R2QyVmNRNFN1ZGVSZHQ4OTNGZ1wiLFxuICBcInBob25lSWRcIjogXCJiYmE3NjkxYi0wYTkwLTQ3MTgtYjNmMi1mMWNhOTUzZjg2MWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTk5LFxuICAgICAgMjM2LFxuICAgICAgMjQyLFxuICAgICAgMjE2LFxuICAgICAgMjQ0LFxuICAgICAgMzQsXG4gICAgICAyMTIsXG4gICAgICAxMzgsXG4gICAgICAyMTAsXG4gICAgICAyNDUsXG4gICAgICAxNDUsXG4gICAgICAxOTAsXG4gICAgICAxNjgsXG4gICAgICAxMDQsXG4gICAgICAyMDQsXG4gICAgICAyMjUsXG4gICAgICA3MixcbiAgICAgIDEsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxMTksXG4gICAgICAyMDQsXG4gICAgICA0OCxcbiAgICAgIDE0NSxcbiAgICAgIDE0NixcbiAgICAgIDI0NCxcbiAgICAgIDEyNSxcbiAgICAgIDMsXG4gICAgICAxNDgsXG4gICAgICAxODksXG4gICAgICAxNzYsXG4gICAgICAxNTEsXG4gICAgICAzNyxcbiAgICAgIDEwMSxcbiAgICAgIDk1LFxuICAgICAgNDksXG4gICAgICAyMjIsXG4gICAgICAxMjEsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFFWRzZYWExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyODk2NjE4MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MDg3OTczMzY0OTU5NjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovVXBja0ZFTW5hbWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVStUZTR3MjdCdXJDZnM1SFRuQ3ozbHV2VGJuYXgrVStXSnkrT0t5c3NSbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrTGVFR2cybDAwZFlEU3VsZ1YxNTJOUCtSeFNuT3JsWElMNU5INnlqZC8vR0YycitOS2Z0eUVIVWRzZ1JrZ1hzdFFmOXlsUytQaHgwMEpqOHZOVWhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNYmUxb0J3ZmNRMm9uMU5vUStPV21xa3IyemlUTU9EZ0xTd0grcW1kNEQwMzJpMis5dC9zUitTQkVnQTZHalZ1SzNINEJ3VzhHb3NBRThOTE55UDBndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2Mjg5NjYxODI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4NTgzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9QSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1BKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN2xpeHhtN0cvKzNpbFU4QlZxWXdmbE96U09BM2xQbk9JMWFvQjBRNHU2TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDk1ODg2MzY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwODU4NDE0NzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MROPE-TECHNOLOGY",
  packname: process.env.PACK_NAME || "MROPE-TECHNOLOGY",
  botname : process.env.BOT_NAME  || "MROPE-BOT",
  ownername:process.env.OWNER_NAME|| "MROPE",


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

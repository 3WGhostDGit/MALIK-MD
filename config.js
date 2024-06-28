const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("237673798856")
global.mongodb = process.env.MONGODB_URI || "  mongodb+srv://maliksahab:maliksahab@cluster0.pkr0dsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
global.port= process.env.PORT || 5000
global.email = 'akk728492@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'malik-md.db' // add your username
global.sudo = process.env.SUDO || 923310195292
global.devs = '923124533358';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtZczVvQ24zRXY5RzkxeUdVaVRzWFhNZnljOUpZUThId1hzQTU1a0tYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhyL0FKQlI2eURreTluY0hMQVIzK3QraEhPZ2JUbk9xa1lOZ0hHMHNtQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSHJmb1BsQTR1dGdxU1RxelhiczdaSGRxSmh1Z3dlM0w0dGJwM20xZzFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkM0UxSDVMcGtoWjNpeitKNDd6V2xhM2d1b0JsVnNwd3lCYW82WmtsOUZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKZ3d0SDZFVFJYRWRNdWc3V3Zvb0N1ZkZPK1VxS00zYXpmWUxzN2YyMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBJbzZYZjduQWIrTGk5UXhzSjdEakVwSGJPdHg1WXNUandtTURjTUNjVUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFhdVVRZUJabEUwKy9JOE83T0liUi9MbzFQSzZlSFNqUnZ2QXFTNEpHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjdYOGlDcW9Za3hpWjJGc2ZpRFFGT1FuWFp6KzJTVjQ1UDByVjEyL2NUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpIT1BJbWFOdEk5SGpldEZDekFDQVh4bGY5RVltV1pKRTVoMG85dEd4RGZEZk1nL1EwUWt3cTRmaE9yQ2xZTXJpNFpoeldtV3FRN2JkNlBWNXpYZmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6IlBySFovSnlINFpoYnRLQ2xxVkZad2JBV3hzYlFiL3dDQWhIWGY4MG9wUjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJWR3lIVUFxUnptd01tNlJ6a1dLZ3ciLCJwaG9uZUlkIjoiMzdjMDFmOWItNjY0Mi00YTFmLWFiNjQtN2UxYmY5YzI3NzM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw5T0t5LzZNUERURkZFYTkrdmwrTEg0cFdpaz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVFWa1Ewc3NXS1VpNXYvaE93TXVvU3NYMVRZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVBlNWZzQ0VOR1grck1HR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicTFWdW1QdkxzaWZFYVVhNVFKMnpQVWhKeGNTdUd3QnF3Zzg3QTNFRC9pRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQVlJemQyd1prcnlDOGVsa3lNU3JicndldDhQS3JiRWczcS81ZUtQWnZ6eVh5ZEs0U2dNSlVnKzBOOGxYVFp2TlRnTzA1VVlsYUNmTlUvV0paanFKRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikh3dml4bmFCTGpuTTVSc3poLzJ3ZDRkY0pTOS9hRnJaZE1CcnFNREZuRlRCT2pzeUdWUEo4NHUvTDlnS0FBWWlIb3pMcFlmY3gvdmxpNEJNeHk3Vmp3PT0ifSwibWUiOnsiaWQiOiIyMzc2NzM3OTg4NTY6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWljaGFlbCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzM3OTg4NTY6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXRWYnBqN3k3SW54R2xHdVVDZHN6MUlTY1hFcmhzQWFzSVBPd054QS80aCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTU2OTM3OH0=",
  botname:   process.env.BOT_NAME === undefined ? 'MALIK-BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'michael' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'bot' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'malik-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '#' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MALIK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

const TelegramBot = require('node-telegram-bot-api'); 
const token = '5687865060:AAFgrbg9OCy2Hr0l2VlwG3HKdgAG66UaUAs';
const bot = new TelegramBot(token, {polling: true});
var Datastore = require("nedb");
var db = new Datastore({ filename: "data", autoload: true });


bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
    "keyboard": [["Headache"], ["Fever"],["Cold"], ["Body pains"],["Motions"],["Eye Infection"],["Liver Infection"],["Throat Infection"],["Kidney Infection"],["BP"],["Fever"],["Diabetics"]]
    }
});
    
}); 
bot.on("message", function (msg) {
	if (msg.text=== "hi") {
		bot.sendMessage(msg.chat.id, "👨‍⚕️")
		bot.sendMessage(msg.chat.id,"Hello mate! I'm your doctor,post your problem");
}
	
    else if(msg.text === "Thank you"){
    	bot.sendMessage(msg.chat.id,"You are always welcome! TAKE CARE");
    	bot.sendMessage(msg.chat.id, "😇");
    }

   
	console.log(msg);
	const chatId = msg.chat.id;
db.find({problem:msg.text}, function (err, docs) {
    for (var i = 0; i < docs.length; i++) {
      console.log(docs[i]);

      bot.sendMessage(chatId, docs[i].medicine +"\n"+ docs[i]. drug +"\n"+docs[i].usage + " \n" + docs[i].cost + "\n" + docs[i].effect + "\n" + docs[i].link);
      bot.sendMessage(msg.chat.id, "I hope this will helps you");



    }
  });

});
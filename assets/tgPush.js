import TelegramBot from 'node-telegram-bot-api';

function sendBotMessage(token,chatId,message){
const bot = new TelegramBot(token, { polling: true });

const sendTelegramMessage = (chatId, message) => {
  bot.sendMessage(chatId, message)
    .then(() => {
      console.log('Message sent successfully');
    })
    .catch((error) => {
      console.error('Error sending message:', error.message);
    });
};
sendTelegramMessage(chatId,message);
}

export { sendBotMessage };
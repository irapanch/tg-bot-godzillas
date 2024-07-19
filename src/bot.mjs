import TeleBot from "telebot";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("text", (msg) => {
  msg.reply.text(msg.text); // Відповідь на текстове повідомлення
  //   msg.reply.text("Hello!"); // Відправка повідомлення "Hello!"
});
export default bot;

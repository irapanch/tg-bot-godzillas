import TeleBot from "telebot";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("text", (msg) => msg.reply.text(msg.text));
bot.on("text", () => bot.sendMessage(msg.from.id, "Hello!"));
export default bot;

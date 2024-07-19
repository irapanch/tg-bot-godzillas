import TeleBot from "telebot";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("text", (msg) =>
  msg.text.startWith("/") ? null : msg.reply.text(msg.text)
);
bot.on("/start", (msg) => {
  msg.reply.photo(
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXA2NTAzbWpraWZ6N2JyYjIyN3dpa2s1eWM3emppcjV2am50MHkyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4kdhrgN4bXwmu3fBDy/giphy.gif"
  );
});
export default bot;

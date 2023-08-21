import { Masterchat, stringify } from "masterchat";
import { extractURL } from "./assets/urlExtractor.js";
import { sendTelegramMessage } from "./assets/tgPush.js";
import { getYoutubeID } from "./assets/getLink.js";
import dotenv from 'dotenv';

dotenv.config();

const video_id = getYoutubeID();
const chatId = process.env.CHAT_ID;
const mc = await Masterchat.init(video_id);

mc.on("chat", (chat) => {
  console.log(chat.authorName, stringify(chat.message));
  const result = extractURL(stringify(chat.message));

  if (result) {
    console.log("Extracted URL:", result.url);
    sendTelegramMessage(chatId, result.inputString);
  }

});

mc.on("actions", (actions) => {
  const chats = actions.filter(
    (action) => action.type === "addChatItemAction"
  );
  const superChats = actions.filter(
    (action) => action.type === "addSuperChatItemAction"
  );
  const superStickers = actions.filter(
    (action) => action.type === "addSuperStickerItemAction"
  );
  // ...
});

mc.on("error", (err) => {
  console.log(err.code);
});

mc.on("end", () => {
  console.log("Live stream has ended");
});

mc.listen();
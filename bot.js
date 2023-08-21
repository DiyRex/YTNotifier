import { Masterchat, stringify } from "masterchat";
import { extractUrlFromString } from "./assets/urlExtractor.js";
import { sendBotMessage } from "./assets/tgPush.js";
import { getYoutubeID } from "./assets/getLink.js";
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

let chatId = null;
let token = null;

const __filename = fileURLToPath(import.meta.url);
const configPath = path.join(path.dirname(__filename), 'config.json');
const configData = readFileSync(configPath, 'utf8');
const config = JSON.parse(configData);
chatId = config.CHAT_ID;
token = config.BOT_TOKEN;

const video_id = getYoutubeID();
const mc = await Masterchat.init(video_id);

mc.on("chat", (chat) => {
  console.log(chat.authorName, stringify(chat.message));
  const result = extractUrlFromString(stringify(chat.message));

  if (result) {
    console.log("Extracted URL:", result.url);
    sendBotMessage(token,chatId, result.inputString);
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
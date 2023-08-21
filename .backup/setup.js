import fs from 'fs';
import prompt from 'prompt-sync';

const promptSync = prompt();

const newBotToken = promptSync('Enter the new Bot Token : ');

const newChatId = promptSync('Enter the new Chat ID : ');


const envFilePath = '.env';

const existingContent = fs.readFileSync(envFilePath, 'utf-8');

const updatedContent = existingContent
  .replace(/BOT_TOKEN=.*$/, `BOT_TOKEN=${newBotToken}`)
  .replace(/CHAT_ID=.*$/, `CHAT_ID=${newChatId}`);

fs.writeFileSync(envFilePath, updatedContent, 'utf-8');

console.log('.env file updated successfully.');
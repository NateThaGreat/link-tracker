import { Client } from "discord.js-selfbot-v13";
// import url from "url";
import mongoose from "mongoose";
import { DISCORD_TOKEN, MONGO_URI } from "./utils/constants";
import ready from "./listeners/ready";
import messageCreate from "./listeners/messageCreate";

mongoose.connect(MONGO_URI, {});

const client = new Client({
  checkUpdate: false,
  // See other options here
  // https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
  // All partials are loaded automatically
});

async function start() {
  ready(client);
  messageCreate(client);

  client.login(DISCORD_TOKEN);
  // console.log(client);
}

start();

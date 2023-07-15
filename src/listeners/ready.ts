import { Client } from "discord.js-selfbot-v13";

export default (client: Client): void => {
  client.on("ready", async () => {
    if (client.user) {
      console.log(`${client.user.username} is online`);
    }
  });
};

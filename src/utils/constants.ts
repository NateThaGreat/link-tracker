import * as config from "./config.json";

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN ?? config.DISCORD_TOKEN;

export const MONGO_URI = process.env.MONGO_URI ?? config.MONGO_URI;

export const BLACKLIST_DOMAINS =
  process.env.BLACKLIST_DOMAINS?.split(",") ?? config.BLACKLIST_DOMAINS ?? [];

export const BLACKLIST_SERVERS =
  process.env.BLACKLIST_SERVERS?.split(",") ?? config.BLACKLIST_SERVERS ?? [];

export const BLACKLIST_CHANNELS =
  process.env.BLACKLIST_CHANNELS?.split(",") ?? config.BLACKLIST_CHANNELS ?? [];

export const BLACKLIST_USERS =
  process.env.BLACKLIST_USERS?.split(",") ?? config.BLACKLIST_USERS ?? [];

/* To set these constants without hardcoding, create a json file at:
src/utils/config.json
and set its contents to the below, with your values
{
    "DISCORD_BOT_TOKEN": "my-discord-bot-token",
    "DISCORD_BOT_CLIENT_ID": "my-discord-bot-app-id",
    "ALLOWED_SERVER_IDS": [
        "my-server-id-1",
        "my-server-id-2"
    ]
}
*/
if (!DISCORD_TOKEN) {
  throw "DISCORD_TOKEN must be set in env or config";
}

export const LOG_ERRORS = true;

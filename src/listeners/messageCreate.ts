import { Client, Message, TextChannel } from "discord.js-selfbot-v13";
import normalizeUrl from "@esm2cjs/normalize-url";
import { Link, ISighting } from "../models/link/index";
import { BLACKLIST_DOMAINS } from "../utils/constants";

import { Logger } from "tslog";

const logger = new Logger({
  name: "SightingLogger",
  displayDateTime: true,
  displayFilePath: "hidden",
  displayFunctionName: false,
  minLevel: "debug",
  overwriteConsole: true,
  appenders: {
    file: {
      type: "file",
      filename: "../../logs/sighting.log",
      maxFileSize: 1048576,
      backups: 5,
      compress: true,
    },
  },
});

export default (client: Client): void => {
  client.on("messageCreate", async (message: Message) => {
    if (message.channel.id == 1098513289954218004) {
      logger.info("Message detected in #sightings");
      const webhook = "https://discord.com/api/webhooks/....";

      if (message.embeds.length > 0) {
        logger.info("Embed detected!");
        const embed = message.embeds[0];

        // send webhook to url
        fetch(webhook, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            embeds: [embed],
          }),
        })
          // replace console.log('Webhook sent!: ', embed)) with logger.info('Webhook sent!: ', embed))
          .then((response) => logger.info("Webhook sent!: ", embed))
          .catch((error) => logger.error("Error sending webhook:", error));
      }
      return;
    }

    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = message.content.match(urlRegex);

    if (!urls) {
      return;
    }

    //   const blacklistedUrl = urls.find((url) =>
    //     BLACKLIST_DOMAINS.some((domain) => url.includes(domain))
    //   );
    //   if (blacklistedUrl) {
    //     logger.warn("Blacklisted URL detected:", blacklistedUrl); // Replaced console.warn with logger.warn
    //     return;
    //   }
    //   const sighting: ISighting = {
    //     user_id: message.author.id,
    //     username: message.author.username,
    //     timestamp: message.createdAt,
    //     content: message.content,
    //     full_url: urls.length > 0 ? urls[0] : "",
    //     server_id: message.guild?.id || "",
    //     server_name: message.guild?.name || "",
    //     channel_id: message.channel?.id || "",
    //     channel_name: (message.channel as TextChannel)?.name || "",
    //     message_id: message.id,
    //     message_link: `https://discord.com/channels/${message.guild?.id}/${message.channel?.id}/${message.id}`,
    //     additional_urls: urls.length > 1 ? urls.slice(1) : [],
    //   };

    //   if (!sighting.full_url) {
    //     console.warn("Sighting has no full URL:", sighting);
    //     return;
    //   }

    //   const normalizedUrl = normalizeUrl(sighting.full_url, {
    //     stripHash: true, // Strip the fragment identifier
    //     removeQueryParameters: true, // Strip the query string
    //     // stripProtocol: true, // Remove http/https from the URL
    //     stripWWW: true, // Remove www from the URL
    //   });

    //   try {
    //     logger.debug("Checking db for: ", normalizedUrl); // Replaced console.log with logger.debug
    //     const link = await Link.findOne({
    //       url: normalizedUrl,
    //     });

    //     if (!link) {
    //       logger.info("Creating new link:", normalizedUrl); // Replaced console.log with logger.debug
    //       const parsedUrl = new URL(normalizedUrl);
    //       const newLink = new Link({
    //         url: normalizedUrl,
    //         domain: parsedUrl.hostname,
    //         path: parsedUrl.pathname,
    //       });

    //       newLink.sightings.push(sighting);
    //       await newLink.save();
    //     } else {
    //       logger.debug("Spotted link:", normalizedUrl); // Replaced console.log with logger.debug
    //       link.sightings.push(sighting);
    //       await link.save();
    //     }
    //   } catch (err) {
    //     logger.error("Error while saving sighting:", err); // Replaced console.error with logger.error
    //   }sdaf
  });
};

import { Client, WebhookClient } from "discord.js";

const MTA3NDA5NjkyNjI3NTkyODA5NA.GtTQrC.8Ax-JW1JdbAbr3Khr7U84DzNthaYnJsyzNjk6g = process.env.DISCORD_TOKEN;
const 1074095236554444920 = process.env.DISCORD_WEBHOOK_ID;
const AwzikfLA6iHBsUO78jD6hz0palHnSOlj6ITCb_m692RUkZQfuStqS-OxFNXyaeQOEMLV = process.env.DISCORD_WEBHOOK_TOKEN;

console.log("Discord token: " + DISCORD_TOKEN);
console.log("Discord webhook id: " + DISCORD_WEBHOOK_ID);
console.log("Discord webhook token: " + DISCORD_WEBHOOK_TOKEN);

export const discordClient = new Client();

export const discordWebhookClient = new WebhookClient(
	DISCORD_WEBHOOK_ID,
	DISCORD_WEBHOOK_TOKEN
);

discordClient.once("ready", () => {
	console.log("Discord bot ready!");
});

discordClient.login(DISCORD_TOKEN);

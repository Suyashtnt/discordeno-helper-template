import {
	createCommand,
	humanizeDelta,
	MessageEmbed,
	sendMessage,
	upSince,
} from '../../deps.ts';

import nsfw from 'https://x.nest.land/discordeno-helper@2.4.0/inhibitors/nsfw.ts';

export default createCommand({
	command: 'uptimeNSFW',
	desc: 'the bots uptime',
	runs: (msg) => {
		const diff = Date.now() - upSince;

		const embed = new MessageEmbed()
			.setTitle(`**Uptime**`)
			.setDescription(
				`
        I've been online for:
        **${humanizeDelta(diff)}** 
        `
			)
			.setColor(`#35e07c`);
		sendMessage(msg.channelID, { embed });
	},
	inhibitors: [nsfw],
});

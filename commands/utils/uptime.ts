import { createCommand, MessageEmbed, sendMessage } from '../../deps.ts';
import { upSince } from '../../mod.ts';
import { humanizeDelta } from '../../utils/timeHelper.ts';

export default createCommand({
	command: 'uptime',
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
});

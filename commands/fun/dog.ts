import { createCommand, MessageEmbed, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'dog',
	desc: 'gib dog',
	runs: async (msg) => {
		const body = await (
			await fetch('https://nekos.life/api/v2/img/woof')
		).json();

		const output = new MessageEmbed()
			.setTitle('Dog 🐶')
			.setImage(body.url)
			.setColor('#6df7ff');

		sendMessage(msg.channelID, {
			embed: output,
		});
	},
});

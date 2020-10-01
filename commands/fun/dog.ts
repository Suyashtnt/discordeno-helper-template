import { createCommand, MessageEmbed, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'dog',
	desc: 'gib dog',
	runs: async (msg) => {
		const body = await (
			await fetch('https://no-api-key.com/api/v1/animals/dog')
		).json();

		const output = new MessageEmbed()
			.setTitle('Dog 🐶')
			.setImage(body.image)
			.setColor('#6df7ff');

		sendMessage(msg.channelID, {
			embed: output,
		});
	},
});
